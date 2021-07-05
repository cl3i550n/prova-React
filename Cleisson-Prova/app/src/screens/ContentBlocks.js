import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ContentBlocks({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>ContentBlocks</Text>

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