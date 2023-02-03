import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
let btnColor;
export const ColorPreview = ({ paletteName, colors, handlePress }) => {
  const firstColor = parseInt(colors[0].hexCode.replace('#', ''), 16),
    SecondColor = parseInt(colors[1].hexCode.replace('#', ''), 16),
    thirdColor = parseInt(colors[2].hexCode.replace('#', ''), 16);

  btnColor = (firstColor && SecondColor && thirdColor) > 0xffffff / 1.2 ?? false;
  const innerTextColor = {
    color: btnColor ? 'black' : 'white',
  };
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.button}>
        <View
          style={[
            styles.leftUp,
            { backgroundColor: colors[0]?.hexCode ?? 'white', width: 90, height: 90 },
          ]}
        />
        <View
          style={[
            styles.leftUp,
            { backgroundColor: colors[1]?.hexCode ?? 'white', width: 65, height: 65 },
          ]}
        />
        <View
          style={[
            styles.leftUp,
            { backgroundColor: colors[2]?.hexCode ?? 'white', width: 40, height: 40 },
          ]}
        />
        <Text
          style={[
            { textAlign: 'center' },
            innerTextColor,
            { fontFamily: 'coolvetica', fontSize: 20 },
          ]}>
          {paletteName ?? 'Add a new Palette'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  leftUp: {
    position: 'absolute',
    borderRadius: 50,
  },
});
export default ColorPreview;
