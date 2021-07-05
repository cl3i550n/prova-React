import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Pricing(props) {
    return (
        <View style={styles.global}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titulo}>{props.titulo}</Text>
                </View>
                <View style={styles.containerInterno}>
                    <Text style={styles.tipoPlano}>{props.tipoPlano}</Text>
                    <Text style={styles.valor}>{props.valor}</Text>
                    <Text style={styles.descri}>{props.descri}</Text>
                    <Text style={styles.detailPlano}>{props.detailPlano}</Text>
                    <Button
                    title={props.titulobtn}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    global:{
        alignItems: 'center',
        paddingTop: '10%'
    },
    container: {
        width: '90%',
        height: 300,
        borderWidth: 1
    },
    titulo:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 25,
        borderBottomWidth: 1,
        padding: 20
    },
    containerInterno:{
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    tipoPlano:{
        fontSize: 24
    },
    valor:{
        fontSize: 40,
        fontWeight: 'bold'
    },
    descri: {
        fontSize: 16
    },
    detailPlano: {
        fontSize: 8
    }
})