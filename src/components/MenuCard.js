import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const MenuCard = ({ serie, onNavigate }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onNavigate}>
            <View style={styles.card} >
                <Image style={styles.icone} source={{uri: serie.img}}/>
                <Text style={styles.texto}>{serie.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        padding: 10,
        height: Dimensions.get('window').width / 2
    },

    card: {
        flex: 1,
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icone: {
        height:70,
        width: 70,
        marginBottom: 20,
        resizeMode: "stretch"
    },

    texto: {
        fontWeight: 'bold'
    }
})

export default MenuCard;