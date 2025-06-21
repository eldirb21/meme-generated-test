import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TextStyle,
  StyleProp,
  StyleSheet,
} from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
} from 'react-native-reanimated';
import { IconGroup } from '../molecules/IconGroup';
import { ElementProps } from '../../hooks';

type DraggableTextItemProps = {
  item: ElementProps;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (text: string) => void;
  onBlur: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  styleInput?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
};

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
  const scale = useSharedValue(1);
  const offsetX = useSharedValue(item.x || 0);
  const offsetY = useSharedValue(item.y || 0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const pinchGesture = Gesture.Pinch().onUpdate(e => {
    scale.value = e.scale;
  });

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

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(offsetX.value) },
      { translateY: withSpring(offsetY.value) },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={[animatedStyle, styles.absolute]}>
        <TouchableOpacity onPress={onSelect} activeOpacity={0.9}>
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

const styles = StyleSheet.create({
  selectionBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#009aff',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
  },
});
