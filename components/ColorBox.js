import { React } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const ColorBox = ({ hexCode, colorName }) => {
  const colorStyle = {
    backgroundColor: hexCode ?? '#000',
  };
  const textColor = {
    color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white',
  };
  return (
    <View style={[styles.container, colorStyle]}>
      <Text style={[styles.text, textColor]}>
        {colorName ?? 'Default Value'} {hexCode}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default ColorBox;
