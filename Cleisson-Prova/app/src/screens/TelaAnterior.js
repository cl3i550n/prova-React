import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaAnterior({route}) {
 return (
   <View>
       <Text style={styles.text}></Text>
   </View>
  );
}

const styles = StyleSheet.create({
    text: {
      fontSize: 25,
      color: 'black',
      textAlign: 'center'
    }
  })