import {
  useSharedValue,
  useAnimatedStyle,
  withDecay,
} from 'react-native-reanimated';
import { Gesture } from 'react-native-gesture-handler';

export const useCardGesture = () => {
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

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: offsetX.value },
      { translateY: offsetY.value },
      { scale: scale.value },
    ],
  }));

  return {
    composedGesture,
    animatedStyle,
  };
};
