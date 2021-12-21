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



const HomeScreen = props => {

  const login = useSelector(state => state.loggedInReducer)
  const dispatch = useDispatch();

  const desconectarseInputHandler = (e) => {
  
      e.preventDefault();
      dispatch(loggedOut(false));
    
  };

  return (
    
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Desconectarse"
                onPress={desconectarseInputHandler}
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
  inputContainer: {
   
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    padding: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: '50%',
    padding: 10,
  },
});

export default HomeScreen;