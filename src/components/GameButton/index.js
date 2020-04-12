import React from 'react';
import {ButtonBox, ButtonText, ButtonInfo} from './styles';
import { View } from 'react-native';

export default function GameButton({ text, color, symbols, onPress, opacity}){
  return(
    <ButtonBox opacity={opacity} onPress={onPress} activeOpacity={0.8} color={color}>
      <View >
        <ButtonInfo>
          {symbols}
          <ButtonText>{text}</ButtonText>
        </ButtonInfo>
      </View>
    </ButtonBox> 
  );
}
