import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';


import Card from '../components/Card';
import Input from '../components/Input';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText'



const LoginScreen = props => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState()

  const usuarioInputHandler = inputText => {
    setUsuario(inputText);
  };

  const contrasenaInputHandler = inputText => {
    setContrasena(inputText);
  };

  const resetInputHandler = () => {
    setUsuario('');
    setContrasena('');
    setConfirmed(false);
  };

  const conectarseInputHandler = () => {
    //const chosenNumber = parseInt(enteredValue);
    setConfirmed(true);
    // setSelectedNumber(chosenNumber);
    // setEnteredValue('');
    // Keyboard.dismiss();
  };

    return (
    
        <View style={styles.screen}>
          <Card style={styles.inputContainer}>
            <BodyText>Usuario</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={usuarioInputHandler}
                value={usuario}
              />
            <BodyText>Contraseña</BodyText>
              <Input
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={contrasenaInputHandler}
                value={contrasena}
              />
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button
                    title="Conectarse"
                    onPress={() => props.navigation.navigate('Home')}
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Borrar"
                    onPress={resetInputHandler}
                  />
                </View>
              </View>
          </Card>
        </View>
     
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
      fontSize: 20,
      marginVertical: 10,
      fontFamily: 'open-sans-bold'
    },
    inputContainer: {
      width: 300,
      maxWidth: '80%',
      alignItems: 'center',
      padding: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      paddingHorizontal: 15
    },
    button: {
      width: '50%',
      padding: 10,
    },
    input: {
      width: 80,
      height: 40,
      textAlign: 'center'
    },
  });

export default LoginScreen;