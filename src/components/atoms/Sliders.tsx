import { StyleSheet, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { SlidersProps } from '../../services';

export const Sliders = ({ onValueChange, value }: SlidersProps) => {
  return (
    <View style={styles.sliderTrackWrapper}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.5}
        minimumTrackTintColor="#4da6ff"
        maximumTrackTintColor="#2a2a2c"
        thumbTintColor="#4da6ff"
        value={Number(value)}
        onValueChange={onValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderTrackWrapper: {
    height: 40,
    justifyContent: 'center',
    borderRadius: 999,
  },

  slider: {
    width: '100%',
    height: '100%',
    transform: [{ scaleY: 1.5 }],
  },
});
