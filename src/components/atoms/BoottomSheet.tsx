import React, { memo, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet,
  Pressable,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withSpring,
} from 'react-native-reanimated';
import { BoottomSheetProps } from '../../services';
import { styles } from './styles';
import { Icons } from './Icons';
import { colors } from '../../utils';

const { height } = Dimensions.get('window');
const SPRING_CONFIG = {
  damping: 20,
  stiffness: 150,
  mass: 1,
};
const CLOSE_DURATION = 300;

const MemoBoottomSheet = ({
  children,
  visible,
  title,
  onClose,
  withHeader,
  style,
}: BoottomSheetProps) => {
  const translateY = useSharedValue(height);
  const overlayOpacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, SPRING_CONFIG);
      overlayOpacity.value = withTiming(1, {
        duration: 250,
        easing: Easing.out(Easing.ease),
      });
    } else {
      translateY.value = withTiming(height, {
        duration: CLOSE_DURATION,
        easing: Easing.inOut(Easing.ease),
      });
      overlayOpacity.value = withTiming(0, {
        duration: 250,
        easing: Easing.in(Easing.ease),
      });
    }
  }, [overlayOpacity, translateY, visible]);

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const overlayStyle = useAnimatedStyle(() => ({
    opacity: overlayOpacity.value,
  }));

  return (
    <View
      style={StyleSheet.absoluteFill}
      pointerEvents={visible ? 'auto' : 'none'}
    >
      {onClose && (
        <Animated.View style={[styles.overlay, overlayStyle]}>
          <Pressable style={StyleSheet.absoluteFill} onPress={onClose} />
        </Animated.View>
      )}

      <Animated.View style={[styles.boottomSheet, style, sheetStyle]}>
        {withHeader && (
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>{title}</Text>
            {onClose && (
              <TouchableOpacity onPress={onClose}>
                <Icons name="close" color={colors.white} size={22} />
              </TouchableOpacity>
            )}
          </View>
        )}
        {children}
      </Animated.View>
    </View>
  );
};

export const BoottomSheet = memo(MemoBoottomSheet);
