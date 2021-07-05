import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Bloco(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containertxt}>
                <Text style={[styles.txt, props.color]}>{props.txt}</Text>
                <Text style={styles.txtMenor}>{props.txtmenor}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        fontFamily: 'Nunito'
    },
    containertxt: {
        width: '90%',
        borderTopWidth: 3,
        height: 120,
        fontSize: 25,
        borderWidth: 1,
        borderRadius: 5,
        padding: 24
    },
    txt: {
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: 36,
        marginBottom: 0,
    },
    txtMenor:{
        textAlign: 'right'
    }
})