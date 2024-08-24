import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

interface Props {
  author: string;
  nameOfBook: string;
  coverURL: string;
  categoryColor: string;
  url:string
}

const Book: FC<Props> = ({
  author,
  nameOfBook,
  coverURL,
  categoryColor,
  url
}) => {
 const OpenWEB = (url:string) => {
    Linking.openURL(url);
  };
  return (
    <TouchableOpacity onPress={()=>OpenWEB(url)}><View style={styles.container}>
      <View style={[styles.coloredSquare, {backgroundColor: categoryColor}]}>
        <Image source={{uri: coverURL}} style={styles.image} />
      </View>
      <Text style={styles.text}>{author}</Text>
      <Text style={styles.text}>{nameOfBook}</Text>
    </View>
      </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 10,marginTop:50},
  coloredSquare: {
    borderRadius: 8,
    height: 300,
    width: 300,
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    height: 300,
    width:200,
    resizeMode: 'stretch',
    marginTop: -20,
    borderRadius: 8,
  },
  text:{color:'#000',
    textAlign:'center'
  }
});
