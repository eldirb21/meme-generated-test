import { TextStyle } from 'react-native';
import { MenuItem } from '../services';

export const Func = {
  pressMenu: (
    type: MenuItem,
    options: {
      setColored: React.Dispatch<React.SetStateAction<boolean>>;
      setAddText: React.Dispatch<React.SetStateAction<boolean>>;
      setExported: React.Dispatch<React.SetStateAction<boolean>>;
    },
    state: { colored: boolean; addText: boolean; exported: boolean },
  ) => {
    switch (type.title) {
      case 'Gaya':
        options.setColored(!state.colored);
        break;
      case 'Tambah':
        options.setAddText(!state.addText);
        break;
      case 'Export':
        options.setExported(!state.exported);
        break;
    }
  },
  setModel(
    key: string,
    idx: number,
    val: boolean | number | string,
    data: any,
  ) {
    const _model = [...data];
    _model[idx] = { ..._model[idx], [key]: val };
    return _model;
  },
  styledText: (
    color: string,
    isbold: boolean,
    isitalic: boolean,
  ): TextStyle => ({
    color,
    fontWeight: isbold ? 'bold' : 'normal',
    fontStyle: isitalic ? 'italic' : 'normal',
  }),
};
