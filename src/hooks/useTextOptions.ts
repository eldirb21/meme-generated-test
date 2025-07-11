import { useCallback } from 'react';
import { ElementProps } from '../services';

export const useTextOptions = (
  elements: ElementProps[],
  setElements: React.Dispatch<React.SetStateAction<ElementProps[]>>,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const onTextOptions = useCallback(
    (option: string) => {
      if (option === 'Hapus semua') {
        setElements([]);
        setSelectedIndex(-1);
      }
      if (option === 'Teks') {
        if (elements.length <= 0) {
          setElements(prev => [
            ...prev,
            {
              id: Date.now(),
              text: 'Teks baru',
              editable: true,
              color: '#000',
              strokeColor: '#000',
              bold: false,
              italic: false,
              strokeWidth: 1,
              x: 0,
              y: 0,
            },
          ]);
        }
        setSelectedIndex(elements.length);
      }
    },
    [elements, setElements, setSelectedIndex],
  );

  return { onTextOptions };
};
