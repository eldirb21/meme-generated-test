import { View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';
import { SlidersProps } from '../../services';
import { styles } from './styles';
import { colors } from '../../utils';

export const Sliders = ({ onValueChange, value }: SlidersProps) => {
  return (
    <View style={styles.sliderTrackWrapper}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={10}
        step={0.5}
        minimumTrackTintColor={colors.sliderThumb}
        maximumTrackTintColor={colors.sliderTrack}
        thumbTintColor={colors.sliderThumb}
        value={Number(value)}
        onValueChange={onValueChange}
      />
    </View>
  );
};
