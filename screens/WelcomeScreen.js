import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  
} from 'react-native';



const WelcomeScreen = props => {
    return (
    
        <View style={styles.screen}>
          <Text> Bienvenido </Text>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              onPress={() => props.navigation.navigate('Home')}
              title="Conectarse"
            />
          </View>
        </View>
     
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
//     title: {
//       fontSize: 20,
//       marginVertical: 10,
//       fontFamily: 'open-sans-bold'
//     },
    
//     buttonContainer: {
//       flexDirection: 'row',
//       width: '100%',
//       justifyContent: 'space-between',
//       paddingHorizontal: 15
//     },
//     button: {
//       width: 100
//     }
  });

export default WelcomeScreen;