

// const getData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('@storage_Key')
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch(e) {
//       // error reading value
//     }
//   }


// export const LOGIN = "LOGIN";

// export const login = (usuario,contrasena) => {

// }
//import { LoginUrl } from '../constants/Api';
//import { Alert } from 'react-native'; // to show alerts in app
//import AsyncStorage from '@react-native-async-storage/async-storage';
// this is what our action should look like which dispatches the "payload" to reducer

// const setLoginState = (loginData) => {
//   return {
//     type: t.SET_LOGIN_STATE,
//     payload: loginData,
//   };
// };

// const setLoginLocal = async (loginData) => {
//   try {
//     await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
//   } catch (err) {
//     console.log(err);
//   }
// };

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export function loggedIn (logged) {
  console.log(logged)
  return {
    type: LOGGED_IN,
    logged
  }
}

export function loggedOut (logged) {
  return {
    type: LOGGED_OUT,
    logged
  }
}



