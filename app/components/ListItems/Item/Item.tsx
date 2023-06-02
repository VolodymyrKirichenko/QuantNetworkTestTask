import { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Item: FC = ({ route }: any) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: route.params.image  }}
        resizeMode='cover'
        style={styles.image}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})
