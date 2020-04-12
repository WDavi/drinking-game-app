import React from 'react';
import {ButtonBox, ButtonText, ButtonInfo} from './styles';
import { View } from 'react-native';

export default function GameButton({text,color,symbols}){
  return(
    <ButtonBox activeOpacity={0.5} color={color}>
      <View >
        <ButtonInfo>
          {symbols}
          <ButtonText>{text}</ButtonText>
        </ButtonInfo>
      </View>
    </ButtonBox> 
  );
}
