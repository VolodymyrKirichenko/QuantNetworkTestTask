import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ListItems } from '../ListItems/ListItems';
import useFetchPhotos from '../../hooks/useFetchPhotos';

export const Main = ({ navigation }: any) => {
  const { photosArray } = useFetchPhotos();

  const loadScene = (item: string) => {
    navigation.navigate('Item', { image: item })
  }

  return (
    <View style={styles.main}>
      <Text style={[styles.title, styles.header]}>
        Main Page
      </Text>

      <FlatList
        data={photosArray}
        renderItem={({ item }) => (
          <ListItems
            item={item}
            loadScene={loadScene}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  itemImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    color: '#333',
    fontFamily: 'mt-bold',
    marginTop: 25,
    textAlign: 'center',
  },
});
