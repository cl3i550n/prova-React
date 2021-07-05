import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Screen6({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Tela 06</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('TelaAnterior')}>
        <Text style={styles.buttontxt}>Clique Aqui</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    textAlign: 'center',
    fontSize: 18
  },
  button: {
    backgroundColor: 'yellow',
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  buttontxt: {
    fontSize: 18
  }
})