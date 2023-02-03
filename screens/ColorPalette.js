import { react } from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { ColorBox } from '../components/ColorBox';
export const ColorPalette = ({ route }) => {
  return (
    <View style={styles.viewHeight}>
      <FlatList
        initialNumToRender={5}
        contentContainerStyle={{ paddingBottom: 20, width: '100%' }}
        style={styles.container}
        data={route.params.colors}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  viewHeight: {
    height: '100%',
    width: '100%',
  },
});
export default ColorPalette;
