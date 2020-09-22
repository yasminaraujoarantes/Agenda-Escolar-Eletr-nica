import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Icon, Button } from 'react-native';

const PeopleListItem = props => {

    const {people} = props;
    const {first, last} = people.name;

    return (
        <TouchableOpacity>
            <View style={styles.line}>

                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />

                <Text style={styles.lineText} >
                    {`${first} ${last}`}
                </Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({    
    line: {
        height: 60,
        borderWidth: 1,
        borderColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 2,
        backgroundColor: 'white'
    },

    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },

    avatar: {
        aspectRatio: 1,
        flex: 1,
        marginLeft: 15,
        borderRadius: 50
    },

    alunoPresente: {
        backgroundColor: '#10C302'
    },

    alunoFaltou: {
        backgroundColor: '#C21704'
    }
})

export default PeopleListItem;