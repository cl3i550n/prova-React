import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Chart(props) {
    return (
        <View style={styles.container}>
            <View style={styles.txt}>
                <Text>{props.txtheader}</Text>
            </View>
            <View style={{width: '90%', height: 250, borderWidth: 1 }} />
            <View style={styles.txt}>
                <Text>{props.txtfooter}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        fontFamily: 'Nunito',
        borderRadius: 5,
    },
    txt: {
        borderWidth: 1,
        width: '90%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    }
})