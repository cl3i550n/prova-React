import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import Bloco from '../components/Bloco';
import Chart from '../components/Chart';

export default function Dashboard({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.txtDashboard}>
            <Text>Home / Dashboard </Text>
          </View>

          <Text style={styles.boasvindas}>Hi John, Welcome back</Text>
          <Text style={styles.featured}>Very detalied & featured admin.</Text>
        </View>
        <Bloco color={{ color: '#007bff' }} txt='29.75 M' txtmenor='Total Users' />
        <Bloco color={{ color: '#6c757d' }} txt='51.25 K' txtmenor='Daily Visitors' />
        <Bloco color={{ color: '#28a745' }} txt='166,89 M' txtmenor='Downloads' />
        <Bloco color={{ color: '#dc3545' }} txt='1,250k' txtmenor='Purchased' />

        <Chart txtheader='Bar Chart' txtfooter='Updated 2 hours ago'/>
        <Chart txtheader='Line Chart' txtfooter='Updated just now'/>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: '5%',
    marginHorizontal: '3%',
  },
  txtDashboard: {
    textAlign: 'right',
    fontSize: 14,
    marginBottom: '5%'

  },
  boasvindas: {
    fontSize: 24,
  }
})