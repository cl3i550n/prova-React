import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Cards from '../components/Cards'

export default function DefaultCards({ navigation }) {
  return (
    <>
      <ScrollView>
        <Cards
          image={require('../components/assets/cart.jpg')}
          txtheader='Card Columns'
          txttitulo='Card title that wraps to a new line'
          txtfooter='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        />
        <Cards
          image={require('../components/assets/cart.jpg')}
          txtheader='Card Columns'
          txttitulo='Card title that wraps to a new line'
          txtfooter='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        />
        <Cards
          image={require('../components/assets/cart.jpg')}
          txtheader='Card Columns'
          txttitulo='Card title that wraps to a new line'
          txtfooter='This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

})