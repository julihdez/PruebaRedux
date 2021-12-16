import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';



const HomeScreen = props => {


  return (
    
      <View style={styles.screen}>
        <Text> Home Screen </Text>
          {/* <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={}
                
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={}
                
              />
            </View>
          </View> */}
      </View>
   
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
//   title: {
//     fontSize: 20,
//     marginVertical: 10,
//     fontFamily: 'open-sans-bold'
//   },
  
//   buttonContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15
//   },
//   button: {
//     width: 100
//   }
 });

export default HomeScreen;