import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Party(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}> PARTY TIME </Text>
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