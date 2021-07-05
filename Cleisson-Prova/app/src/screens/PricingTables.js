import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Pricing from '../components/Pricing'
import PricingTable from '../components/PrincingTable';

export default function PricingTables({ navigation }) {
  return (
    <>
      <ScrollView>
        <Pricing
          titulo='Princing Tables'
          tipoPlano='Free'
          valor='$0'
          descri='There are many variations of passages of Lorem Ipsum available.'
          titulobtn='Sign Up For Free'
        />
        <Pricing
          tipoPlano='Regular'
          valor='$49'
          descri='There are many variations of passages of Lorem Ipsum available.'
          titulobtn='Get Started'
        />
        <Pricing
          tipoPlano='Premium'
          valor='$199'
          descri='There are many variations of passages of Lorem Ipsum available.'
          titulobtn='Contact Us'
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({

})