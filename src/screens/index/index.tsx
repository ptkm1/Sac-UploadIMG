import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../../components/Global';
import { FirstPart,SecondPart, Texto, ProsseguirBTN, Bloco } from '../../components/IndexPage';

export default function Index({navigation}): JSX.Element {
  return (
    <Container>
      <FirstPart>
      <Texto>Bem vindo!</Texto>
      </FirstPart>
      <SecondPart>
        
      </SecondPart>
      <Bloco>
        <View style={{width: "50%", marginLeft: 15, marginTop: 15}}>
          <Text style={{marginBottom: 15}}>Certidão de nascimento</Text>
        <ProsseguirBTN onPress={()=>navigation.navigate('submitFiles')}>
        <Text style={{color: 'white'}}>Incluir</Text>
        </ProsseguirBTN>
        </View>

        <View style={{width: "50%", marginLeft: 15, marginTop: 15}}>
          <Text style={{marginBottom: 15}}>Declaração de nome social</Text>
        <ProsseguirBTN onPress={()=>navigation.navigate('submitFiles')}>
        <Text style={{color: 'white'}}>Incluir</Text>
        </ProsseguirBTN>
        </View>

        <View style={{width: "50%", marginLeft: 15, marginTop: 15}}>
          <Text style={{marginBottom: 15}}>Relatório médico</Text>
        <ProsseguirBTN onPress={()=>navigation.navigate('submitFiles')}>
        <Text style={{color: 'white'}}>Incluir</Text>
        </ProsseguirBTN>
        </View>

        <View style={{width: "50%", marginLeft: 15, marginTop: 15}}>
          <Text style={{marginBottom: 15}}>Tipagem sanguínea</Text>
        <ProsseguirBTN onPress={()=>navigation.navigate('submitFiles')}>
        <Text style={{color: 'white'}}>Incluir</Text>
        </ProsseguirBTN>
        </View>
      </Bloco>
     </Container>
  );
}
