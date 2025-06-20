import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  TextInput,
} from 'react-native';
import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';
import { BotomSheetLayout, BotomSheetText, IconGroup } from './src/components';

const { width } = Dimensions.get('window');
const size = width - 40;

export default function App() {
  const [elements, setElements] = useState([
    {
      id: 1,
      text: 'Tambah\nkata',
      editable: false,
      color: '#000',
      strokeColor: '#000',
      bold: false,
      italic: false,
      strokeWidth: 1,
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(true);

  const scale = useSharedValue(1);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
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
      offsetX.value = startX.value + e.translationX;
      offsetY.value = startY.value + e.translationY;
    })
    .onEnd(e => {
      offsetX.value = withDecay({ velocity: e.velocityX });
      offsetY.value = withDecay({ velocity: e.velocityY });
    });

  const composed = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: scale.value },
    ],
  }));

  const handleDelete = () => {
    setElements(prev => prev.filter((_, i) => i !== selectedIndex));
    setSelectedIndex(-1);
  };

  const handleDuplicate = () => {
    const source = elements[selectedIndex];
    const newElement = {
      ...source,
      id: Date.now(),
    };
    setElements(prev => [...prev, newElement]);
    setSelectedIndex(elements.length);
  };

  const handleOptionPress = (option: string) => {
    if (option === 'Hapus semua') {
      setElements([]);
      setSelectedIndex(-1);
    }
    if (option === 'Teks') {
      setElements(prev => [
        ...prev,
        {
          id: Date.now(),
          text: 'Teks baru',
          editable: false,
          color: '#000',
          strokeColor: '#000',
          bold: false,
          italic: false,
          strokeWidth: 1,
        },
      ]);
      setSelectedIndex(elements.length);
    }
  };

  const handleTextChange = (value: string, index: number) => {
    const updated = [...elements];
    updated[index].text = value;
    setElements(updated);
  };

  const updateStyleForSelectedElement = (newStyle: {
    [x: string]: boolean | number | string;
  }) => {
    if (selectedIndex === -1) return;
    const updated = [...elements];
    updated[selectedIndex] = { ...updated[selectedIndex], ...newStyle };
    setElements(updated);
  };

  const toggleStyle = (type: string) => {
    if (selectedIndex === -1) return;
    const current = elements[selectedIndex];
    updateStyleForSelectedElement({ [type]: !current[type] });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {elements.map((item, index) => (
          <GestureDetector key={item.id} gesture={composed}>
            <Animated.View style={[styles.card, animatedStyle]}>
              <Pressable onPress={() => setSelectedIndex(index)}>
                <View style={styles.selectionBox}>
                  {item.editable ? (
                    <TextInput
                      multiline
                      value={item.text}
                      onChangeText={value => handleTextChange(value, index)}
                      style={[
                        styles.input,
                        {
                          color: item.color,
                          fontWeight: item.bold ? 'bold' : 'normal',
                          fontStyle: item.italic ? 'italic' : 'normal',
                        },
                      ]}
                      autoFocus
                      onBlur={() => {
                        const updated = [...elements];
                        updated[index].editable = false;
                        setElements(updated);
                      }}
                    />
                  ) : (
                    <Text
                      style={[
                        styles.text,
                        {
                          color: item.color,
                          fontWeight: item.bold ? 'bold' : 'normal',
                          fontStyle: item.italic ? 'italic' : 'normal',
                          textShadowColor: item.strokeColor,
                          textShadowOffset: {
                            width: item.strokeWidth,
                            height: item.strokeWidth,
                          },
                          textShadowRadius: item.strokeWidth,
                        },
                      ]}
                    >
                      {item.text}
                    </Text>
                  )}

                  <IconGroup
                    visible={selectedIndex === index}
                    onCopy={handleDuplicate}
                    onDelete={handleDelete}
                    onEdit={() => {
                      const updated = [...elements];
                      updated[index].editable = true;
                      setElements(updated);
                    }}
                  />
                </View>
              </Pressable>
            </Animated.View>
          </GestureDetector>
        ))}

        <BotomSheetLayout
          onClose={() => {}}
          visible={selectedIndex !== -1}
          // visible={true}
          onStyleSelected={item => updateStyleForSelectedElement(item)}
          setTextStyle={item => toggleStyle(item)}
          strokeValue={String(elements[selectedIndex]?.strokeWidth ?? 0)}
        />

        <BotomSheetText
          visible={showOptions}
          onPress={item => handleOptionPress(item)}
          onClose={() => setShowOptions(false)}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: size,
    width: size,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  selectionBox: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#009aff',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    fontSize: 22,
    textAlign: 'center',
    padding: 0,
  },
});
