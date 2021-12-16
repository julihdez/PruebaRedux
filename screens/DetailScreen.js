import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  
} from 'react-native';



const DetailScreen = props => {
    return (
    
        <View >
          <Text> Detail Screen </Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button onPress={() => navigation.goBack()} title="Volver" />
            </View>
        </View>
     
    );
  };
  
//   const styles = StyleSheet.create({
//     screen: {
//       flex: 1,
//       padding: 10,
//       alignItems: 'center'
//     },
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
//   });

export default DetailScreen;