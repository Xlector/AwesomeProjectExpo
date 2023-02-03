// screens/Home.js
import { Component, useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { ColorPreview } from '../components/ColorPreview';
import { useQuery } from 'react-query';
import { TouchableOpacity } from 'react-native-gesture-handler';
const getResponse = async () => {
  const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
  return await result.json();
};
export const Home = ({ navigation, route }) => {
  const { isLoading, data, refetch, isRefetching } = useQuery('Palettes', getResponse);
  const [Palettes, setPalettes] = useState([]);
  const newPalette = route.params ? route.params.newPalette : null;
  const handleRefresh = useCallback(async () => {
    await refetch();
  }, []);
  useEffect(() => {
    if (data) {
      setPalettes(Palettes.filter((e) => !data.includes(e)).concat(data));
    }
    if (newPalette) {
      setPalettes((current) => [newPalette, ...current]);
      delete route.params.newPalette;
    }
  }, [data, newPalette]);
  return (
    <FlatList
      ListFooterComponent={
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ColorPalletteModal');
          }}>
          <View>
            <Text style={{ fontSize: 26 }}>+</Text>
          </View>
        </TouchableOpacity>
      }
      numColumns={6 / 2}
      style={styles.container}
      contentContainerStyle={styles.scrollView}
      data={Palettes}
      refreshing={isLoading || isRefetching}
      onRefresh={handleRefresh}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <ColorPreview
          handlePress={() => {
            navigation.navigate('ColorPalette', {
              paletteName: item.paletteName,
              colors: item.colors,
            });
          }}
          paletteName={item.paletteName}
          colors={item.colors.slice(0, 3)}
          navigation={navigation}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 5,
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
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
  container_All: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    width: '100%',
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 10,
    alignItems: 'center',
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'center',
    paddingBottom: 29,
  },
});

export default Home;
