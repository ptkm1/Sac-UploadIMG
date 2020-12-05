import styled from 'styled-components/native';

export const FirstPart = styled.View`
  height: 40%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  background-color: royalblue;
`;

export const Texto = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 25px;
`;

export const SecondPart = styled.View`
  height: 60%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export const ProsseguirBTN = styled.TouchableOpacity`
  background-color: royalblue;
  padding: 15px;
  border-radius: 9px;
`;

export const Bloco = styled.View`
  background-color: white;
  width: 90%;
  height: 100%;
  margin-top: 30%;
  position: fixed;
  border-radius: 5px;
`;