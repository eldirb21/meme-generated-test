import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {
  useCardGesture,
  useKeyboardVisible,
  useTextOptions,
} from '../../hooks';
import { BooleanKeys, ElementProps, MenuItem } from '../../services';
import {
  BoottomSheetLayout,
  BoottomSheetMenu,
  BoottomSheetText,
  DraggableTextItem,
} from '../../components';
import { Func } from '../../utils';

const { width } = Dimensions.get('window');
const size = width - 40;

export default function Home() {
  const isKeyboardShow = useKeyboardVisible();
  const { composedGesture, animatedStyle } = useCardGesture();

  const [elements, setElements] = useState<ElementProps[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [colored, setColored] = useState(false);
  const [addText, setAddText] = useState(false);
  const [exported, setExported] = useState(false);

  const handleDelete = (index: number) => {
    setElements(prev => prev.filter((_, i) => i !== index));
    setSelectedIndex(-1);
  };

  const handleDuplicate = (index: number) => {
    const source = elements[index];
    const newElement = {
      ...source,
      id: Date.now(),
      x: source.x + 20,
      y: source.y + 20,
    };
    setElements(prev => [...prev, newElement]);
  };

  const { onTextOptions } = useTextOptions(
    elements,
    setElements,
    setSelectedIndex,
  );

  const updateStyleSelected = (newStyle: {
    [x: string]: boolean | number | string;
  }) => {
    if (selectedIndex === -1) return;
    const updated = [...elements];
    updated[selectedIndex] = { ...updated[selectedIndex], ...newStyle };
    setElements(updated);
  };

  const toggleStyle = (type: BooleanKeys) => {
    if (selectedIndex === -1) return;
    const current = elements[selectedIndex];

    if (typeof current[type] === 'boolean') {
      updateStyleSelected({ [type]: !current[type] });
    }
  };

  const onPressMenu = (type: MenuItem) => {
    Func.pressMenu(
      type,
      { setColored, setAddText, setExported },
      { colored, addText, exported },
    );
  };

  return (
    <View style={styles.container}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.card, animatedStyle]}>
          {elements.map((item, index) => (
            <DraggableTextItem
              key={item.id ?? index}
              item={item}
              index={index}
              isSelected={selectedIndex === index}
              onSelect={() => {
                setSelectedIndex(index);
                setElements(prev =>
                  Func.setModel('editable', index, true, prev),
                );
              }}
              onChange={text =>
                setElements(prev => Func.setModel('text', index, text, prev))
              }
              onBlur={() =>
                setElements(prev =>
                  Func.setModel('editable', index, false, prev),
                )
              }
              onDelete={() => handleDelete(index)}
              onDuplicate={() => handleDuplicate(index)}
              styleInput={[
                styles.input,
                Func.styledText(
                  item.color ?? '#000',
                  item.bold ?? false,
                  item.italic ?? false,
                ),
              ]}
              styleText={[
                styles.text,
                Func.styledText(
                  item.color ?? '#000',
                  item.bold ?? false,
                  item.italic ?? false,
                ),
                {
                  textShadowColor: item.strokeColor ?? '#000',
                  textShadowOffset: {
                    width: item.strokeWidth ?? 0,
                    height: item.strokeWidth ?? 0,
                  },
                  textShadowRadius: item.strokeWidth ?? 0,
                },
              ]}
            />
          ))}
        </Animated.View>
      </GestureDetector>

      {!isKeyboardShow && (
        <>
          <BoottomSheetLayout
            visible={colored}
            onClose={() => setColored(false)}
            setTextStyle={item => toggleStyle(item)}
            onStyleSelected={item => updateStyleSelected(item)}
            strokeValue={String(elements[selectedIndex]?.strokeWidth ?? 0)}
          />

          <BoottomSheetText
            visible={addText}
            onPress={item => onTextOptions(item)}
            onClose={() => setAddText(false)}
          />

          <BoottomSheetMenu
            visible
            onPress={onPressMenu}
            withStyle={elements.length > 0}
          />
        </>
      )}
    </View>
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
