import React, { useEffect } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';
import { IconGroup } from '../molecules/IconGroup';
import { DraggableTextItemProps } from '../../services';
import { useKeyboardVisible } from '../../hooks';
import { styles } from './styles';

export const DraggableTextItem: React.FC<DraggableTextItemProps> = ({
  item,
  isSelected,
  onSelect,
  onChange,
  onBlur,
  onDelete,
  onDuplicate,
  styleInput,
  styleText,
}) => {
  const isKeyboardShow = useKeyboardVisible();
  const scale = useSharedValue(1);
  const offsetX = useSharedValue(item.x || 0);
  const offsetY = useSharedValue(item.y || 0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onStart(() => {
      startX.value = offsetX.value;
      startY.value = offsetY.value;
    })
    .onUpdate(e => {
      if (!item.editable) {
        offsetX.value = startX.value + e.translationX;
        offsetY.value = startY.value + e.translationY;
      }
    })
    .onEnd(e => {
      offsetX.value = withDecay({ velocity: e.velocityX });
      offsetY.value = withDecay({ velocity: e.velocityY });
    });

  const pinchGesture = Gesture.Pinch().onUpdate(e => {
    scale.value = e.scale;
  });

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(offsetX.value) },
      { translateY: withSpring(offsetY.value) },
      { scale: scale.value },
    ],
  }));
  useEffect(() => {
    if (!isKeyboardShow) {
      dismissKeyboard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isKeyboardShow]);

  const dismissKeyboard = () => {
    onBlur();
  };

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[animatedStyle, styles.absolute]}>
        <TouchableOpacity onPress={onSelect}>
          <View style={styles.selectionBox}>
            {item.editable ? (
              <TextInput
                multiline
                value={item.text}
                onChangeText={onChange}
                style={styleInput}
                onBlur={onBlur}
                autoFocus
              />
            ) : (
              <Text style={styleText}>{item.text}</Text>
            )}
          </View>
        </TouchableOpacity>

        <IconGroup
          visible={isSelected}
          onCopy={onDuplicate}
          onDelete={onDelete}
        />
      </Animated.View>
    </GestureDetector>
  );
};
