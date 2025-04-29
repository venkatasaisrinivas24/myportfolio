
import { useCallback } from 'react';

type SoundType = 'click' | 'hover' | 'success' | 'error';

const sounds = {
  click: new Audio('/sounds/holo-click.mp3'),
  hover: new Audio('/sounds/holo-hover.mp3'),
  success: new Audio('/sounds/holo-success.mp3'),
  error: new Audio('/sounds/holo-error.mp3'),
};

export const useSound = () => {
  const playHoloSound = useCallback((type: SoundType) => {
    const sound = sounds[type];
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }, []);

  return { playHoloSound };
};
