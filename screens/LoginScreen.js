import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert
} from 'react-native';


import Card from '../components/Card';
import Input from '../components/Input';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import { store } from '../store/store';

import { useDispatch, useSelector } from 'react-redux';
import { loggedIn, loggedOut } from '../store/actions';

//import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = props => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const login = useSelector(state => state.loggedInReducer)
  const dispatch = useDispatch();

  const usuarioInputHandler = inputText => {
    setUsuario(inputText);
  };

 
  const contrasenaInputHandler = inputText => {
    setContrasena(inputText);
  };

  // const resetInputHandler = () => {
  //   setUsuario('');
  //   setContrasena('');
  //   setConfirmed(false);
  // };

  const conectarseInputHandler = (e) => {
    //const chosenNumber = parseInt(enteredValue);
    // setSelectedNumber(chosenNumber);
    // setEnteredValue('');
    // Keyboard.dismiss();
    // console.log(login.login.usuario)
    // console.log(usuario)
    // console.log(contrasena)
    if(login.login.usuario == usuario && login.login.contrasena == contrasena){
      
      e.preventDefault();
      dispatch(loggedIn(true))
      setUsuario('');
      setContrasena('');
      // console.log(login)

    }else{
      console.log("usuario y contrasena invalidos");
      
      // e.preventDefault();
      // dispatch(loggedIn(usuario,contrasena,false));
      // setUsuario('');
      // setContrasena('');   
    }
  };

  // const storeData = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value)
  //     await AsyncStorage.setItem('@storage_Key', jsonValue)
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  

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
                    onPress={conectarseInputHandler}
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
      justifyContent: 'center',
      alignItems: 'center',
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