import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function PricingTable(props) {
    return (
        <View style={styles.global}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titulo}>{props.titulo}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    global: {
        alignItems: 'center',
        paddingTop: '10%'
    },
    container: {
        width: '90%',
        height: 300,
        borderWidth: 1
    },
    titulo: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 25,
        borderBottomWidth: 1,
        padding: 20
    },
})