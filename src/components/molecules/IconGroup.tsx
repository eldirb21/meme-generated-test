import React from 'react';
import { IconButton } from '..';
import { IconGroupProps } from '../../services';
import { styles } from './styles';

export const IconGroup = ({ visible, onCopy, onDelete }: IconGroupProps) => {
  if (!visible) return null;
  return (
    <>
      <IconButton icon="content-copy" onPress={onCopy} style={styles.duplicateIcon} />

      <IconButton icon="close" onPress={onDelete} style={styles.deleteIcon} />
    </>
  );
};
