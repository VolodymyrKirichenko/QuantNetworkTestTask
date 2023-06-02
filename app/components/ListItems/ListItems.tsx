import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Data } from '../../typedefs/typedefs';

interface Props {
  item: Data,
  loadScene: (item: string) => void,
}

export const ListItems: FC<Props> = (props) => {
  const { loadScene, item } = props;
  const {
    author,
    image,
    title
  } = item;

  return (
    <SafeAreaView style={styles.item}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => loadScene(image)}
      >
        <ImageBackground
          source={{ uri: image }}
          resizeMode='cover'
          style={styles.image}
          imageStyle={{ borderRadius: 12 }}
        />
      </TouchableOpacity>

      <View style={[styles.container, styles.block]}>
        <Text style={styles.author}>
          {author}
        </Text>

        <Text style={styles.text}>
          {title.slice(0, 75)}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    gap: 30
  },
  container: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  block: {
    flex: 2,
    gap: 10
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'flex-end',
  },
  author: {
    fontFamily: 'mt-bold',
    fontSize: 20,
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    flexWrap: 'wrap',
    fontFamily: 'mt-light'
  }
})
