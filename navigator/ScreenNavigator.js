import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from  '../screens/HomeScreen';
import ErrorScreen from '../screens/ErrorScreen';

import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator();

const ScreenNavigator = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);

  const logged = useSelector(state => state.loggedInReducer.logged)

console.log(logged);

    return (
      <Stack.Navigator >
        
        <>
          
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </>
            {/* {logged   ? ( 
            <>   
            <Stack.Screen name="Home" component={HomeScreen} />
            </>
        
        ) : (
          <>
            <Stack.Screen name="Error" component={ErrorScreen} />
          </>
        )} */}
      </Stack.Navigator>
        
      
    );
  };
  
  export default ScreenNavigator;