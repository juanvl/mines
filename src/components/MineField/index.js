import React from 'react';

import { View, StyleSheet } from 'react-native';
import Field from '~components/Field';

const MineField = ({ board, ...props }) => {
  const rows = board.map((rows, r) => {
    const fields = rows.map((field, f) => (
      <Field
        {...field}
        key={f}
        onOpen={() => props.onOpenField(r, f)}
        onFlag={() => props.onFlagField(r, f)}
      />
    ));
    return (
      <View style={{ flexDirection: 'row' }} key={r}>
        {fields}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};

export default MineField;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
  },
});
