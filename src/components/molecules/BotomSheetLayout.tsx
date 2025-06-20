import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BottomSheet } from '../atoms/BottomSheet';
import { Sliders } from '../atoms/Sliders';

type Props = {
  onStyleSelected: (item: any) => void;
  visible: boolean;
  onClose: () => void;
  setTextStyle: (item: string) => void;
  strokeValue: string;
};
const colors = [
  '#000',
  '#808080',
  '#ccc',
  '#fff',
  '#f00',
  '#ffa500',
  '#ff0',
  '#0f0',
  '#00f',
  '#800080',
  '#ffc0cb',
];

export const BotomSheetLayout = ({
  onStyleSelected,
  visible,
  onClose,
  setTextStyle,
  strokeValue,
}: Props) => {
  return (
    <BottomSheet withHeader visible={visible} onClose={onClose} title="Pilihan">
      <Text style={styles.panelTitle}>Warna Teks</Text>
      <View style={styles.colorRow}>
        {colors.map(c => (
          <TouchableOpacity
            key={c}
            onPress={() => onStyleSelected({ color: c })}
            style={[styles.colorCircle, { backgroundColor: c }]}
          />
        ))}
      </View>

      <Text style={styles.panelTitle}>Format</Text>
      <View style={styles.formatRow}>
        <TouchableOpacity
          onPress={() => setTextStyle('bold')}
          style={styles.formatButton}
        >
          <Text style={[styles.formatText, { fontWeight: 'bold' }]}>bold</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTextStyle('italic')}
          style={styles.formatButton}
        >
          <Text style={[styles.formatText, { fontStyle: 'italic' }]}>
            italic
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.panelTitle}>Stroke</Text>
      <View style={styles.colorRow}>
        {colors.map(c => (
          <TouchableOpacity
            key={c}
            onPress={() => onStyleSelected({ strokeColor: c })}
            style={[styles.colorCircle, { backgroundColor: c }]}
          />
        ))}
      </View>

      <Text style={styles.panelTitle}>Stroke Width: {strokeValue}</Text>

      <Sliders
        value={strokeValue}
        onValueChange={val => onStyleSelected({ strokeWidth: val })}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  panelTitle: {
    color: '#fff',
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 4,
  },
  colorRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 8,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  formatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
  formatButton: {
    backgroundColor: '#2c2c2e',
    padding: 8,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  formatText: {
    color: '#fff',
    fontSize: 14,
  }, 
});
