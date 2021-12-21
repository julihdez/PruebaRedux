import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { loggedOut } from '../store/actions';



const ErrorScreen = props => {

//   const login = useSelector(state => state.loggedInReducer)
//   const dispatch = useDispatch();

//   const desconectarseInputHandler = (e) => {
  
//       e.preventDefault();
//       dispatch(loggedOut(false));
    
//   };

  return (
    
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}> La conexion fallo, intentelo nuevamente </Text>
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
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 10,
  },
});

export default ErrorScreen;