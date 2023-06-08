import { StyleSheet, View, } from 'react-native';
import TitleComponent from './components/title-component';
import ImageComponent from './components/image-component';
import ButtonComponent from './components/button-component';
import { useState } from 'react';

export default function App() {

  const images = [
    { uri: "https://assets-global.website-files.com/5e73a1e3ba24f2cd5dd2232a/624302d3b2e687a806268a42_Como%20criar%20um%20NFT.jpg" },
    { uri: "https://s2.glbimg.com/EPCclUpcD8MwJ3gqsD5Nw1FsOgw=/0x0:595x599/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/c/8/vwEnBlQTOR5JMPV1qigw/captura-de-tela-2021-12-14-114837.jpg" },
    { uri: "https://s2.glbimg.com/TYZmb3MwNw9yAOkcHuP-cJGhtCw=/smart/e.glbimg.com/og/ed/f/original/2022/03/30/bored-ape-nft-1-milhao-gq.jpg" }

  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePress = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };



  return (
    <View style={styles.container}>
      <TitleComponent titleApp="NFT" />
      <ImageComponent imageProps={images[currentImageIndex]} />
      <ButtonComponent handlePress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.87)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

});
