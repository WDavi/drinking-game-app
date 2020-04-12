import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GameButton from '../../components/GameButton';
import {InfoBox} from '../../components/InfoBox/styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <InfoBox>
        <Text style={styles.text}>Escolha um modo de jogo</Text>
      </InfoBox>
      <GameButton 
        onPress={() => navigation.navigate('Party')} 
        color="#b4a7d5" 
        symbols="🎉" 
        text=" Festa"
      />

      <GameButton 
        onPress={() => navigation.navigate('Hot')}  
        color="#d81418" symbols="🔥" 
        text=" Hot"
      />

      <GameButton 
        onPress={() => navigation.navigate('INever')}  
        color="#0c2c45" 
        symbols="🔒 ✋" 
        text="Eu nunca"
      />
      <GameButton 
        opacity="0.5" 
        color="#f2a12c" 
        symbols="🔒"
        text=" Em breve"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor: "#110c22",
  },
  text: {
    color:'#fff',
    fontSize: 24,
    fontWeight: "bold"
  },
})