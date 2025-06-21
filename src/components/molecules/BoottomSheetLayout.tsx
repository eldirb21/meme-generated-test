import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { BoottomSheet } from '..';
import { Sliders } from '../atoms/Sliders';
import { BoottomSheetLayoutProps, colorData } from '../../services';
import { $font, styles } from './styles';

export const BoottomSheetLayout = ({
  onStyleSelected,
  visible,
  onClose,
  setTextStyle,
  strokeValue,
}: BoottomSheetLayoutProps) => {
  return (
    <BoottomSheet
      withHeader
      visible={visible}
      onClose={onClose}
      title="Pilihan"
      style={styles.bottomSheet}
    >
      <Text style={styles.panelTitle}>Warna Teks</Text>
      <View style={styles.colorRow}>
        {colorData.map(c => (
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
          <Text style={[styles.formatText, $font(true, false)]}>bold</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTextStyle('italic')}
          style={styles.formatButton}
        >
          <Text style={[styles.formatText, $font(false, true)]}>italic</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.panelTitle}>Stroke</Text>
      <View style={styles.colorRow}>
        {colorData.map(c => (
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
        onValueChange={(val: number) => onStyleSelected({ strokeWidth: val })}
      />
    </BoottomSheet>
  );
};
