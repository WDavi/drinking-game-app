import styled from 'styled-components/native';

export const ButtonBox = styled.TouchableOpacity`
  height: 70px;
  background: ${props => props.color};
  align-self: stretch;
  align-items: center;
  justify-content: center;
  margin: 12px 30px;
  border-radius: 8px;
  opacity: ${props => props.opacity || '1'};
`;


export const ButtonText = styled.Text`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  font-style: italic;
  margin-left: 8px;
`;

export const ButtonInfo = styled.Text`
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
  font-size: 32px;
`;