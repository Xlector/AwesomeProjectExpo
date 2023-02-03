import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';
const colorShade = (col, amt) => {
  col = col.replace(/^#/, '');
  if (col.length === 3) col = col[0] + col[0] + col[1] + col[1] + col[2] + col[2];

  let [r, g, b] = col.match(/.{2}/g);
  [r, g, b] = [parseInt(r, 16) + amt, parseInt(g, 16) + amt, parseInt(b, 16) + amt];

  r = Math.max(Math.min(255, r), 0).toString(16);
  g = Math.max(Math.min(255, g), 0).toString(16);
  b = Math.max(Math.min(255, b), 0).toString(16);

  const rr = (r.length < 2 ? '0' : '') + r;
  const gg = (g.length < 2 ? '0' : '') + g;
  const bb = (b.length < 2 ? '0' : '') + b;

  return `#${rr}${gg}${bb}`;
};
export const ColorSelector = ({ colorName, hexCode, value, onValueChange }) => {
  return (
    <View style={styles.ColorSelector}>
      <View style={styles.item}>
        <Text style={{ fontSize: 18 }}>{colorName} </Text>
      </View>
      <View style={styles.item}>
        <Switch
          trackColor={{
            true: colorShade(
              hexCode,
              parseInt(hexCode.replace('#', ''), 16) > 0x000000 / 1.2 ? -40 : 100
            ),
            false: colorShade(
              hexCode,
              parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.35 ? -20 : 60
            ),
          }}
          value={value}
          thumbColor={hexCode}
          onValueChange={onValueChange}
          ios_backgroundColor={'white'}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ColorSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    width: '100%',
    borderColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  item: {
    textAlign: 'center',
  },
});

export default ColorSelector;
