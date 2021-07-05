import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Cards(props) {
    return (
        <View style={styles.container}>
            <View style={styles.txt}>
                <Text>{props.txtheader}</Text>
            </View>
            <View style={{width: '90%', height: 250, borderWidth: 1 }}>
            <Image style={{width: '100%', height: 250}}
            source={props.image}
            /> 
            </View>
            <View style={styles.txt}>
                <Text>{props.txttitulo}{props.txtfooter}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        borderRadius: 5,
    },
    txttitulo: {
        fontSize: 48
    },
    txt: {
        borderWidth: 1,
        width: '90%',
        alignItems: 'flex-start',
        padding: 5,
    }
})