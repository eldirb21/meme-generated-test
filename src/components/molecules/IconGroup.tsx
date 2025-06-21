import { StyleSheet } from 'react-native';
import React from 'react';
import { IconButton } from '..';

type Props = {
  visible: boolean;
  onCopy: () => void;
  onDelete: () => void;
};

export const IconGroup = ({ visible, onCopy, onDelete }: Props) => {
  if (!visible) return null;
  return (
    <>
      <IconButton icon="📄" onPress={onCopy} style={styles.duplicateIcon} />

      <IconButton icon="❌" onPress={onDelete} style={styles.deleteIcon} />
    </>
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  duplicateIcon: {
    position: 'absolute',
    top: -10,
    left: -10,
  },
  editIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
  },
});
