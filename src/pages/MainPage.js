import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

export default function MainPage({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Text style={styles.container}> Olá, Yasmin</Text>
        <Image style={styles.avatar} source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/27/23/11/post-it-notes-1284667_960_720.jpg' }} />
        <View style={{width: 300, marginTop: 30}}>
          <Button title="Iniciar Conversa"/>
        </View>
        <View style={{width: 300, marginTop: 10 }}>
          <Button title="Avisos"/>
        </View>
        <View style={{width: 300, marginTop: 10  }}>
          <Button title="Contúdo Pedagógico"/>
        </View>
        <View style={{width: 300, marginTop: 10  }}>
          <Button title="Chamada" onPress={() => navigation.navigate('Chamada')}/>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      marginTop: 30
    },

    avatar: {
      width: 300,
      height: 300,
      marginTop: 20
    }

});