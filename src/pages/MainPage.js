import * as React from 'react';
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import MenuCard from '../components/MenuCard';
import series from '../../assets/series.json';

export default function MainPage({ navigation }) {
  return (
    <View>
      <FlatList 
        data={series}
        renderItem={({item}) => (
          <MenuCard serie={item} onNavigate={() => navigation.navigate(item.linkTo)}/>
        )}
        numColumns={2}
        />
    </View>
  );
}