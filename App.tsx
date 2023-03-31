/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed';

const styles = StyleSheet.create({
  center:{
    alignItems:'center',
  },
  fontBold:{
    fontWeight:"bold",
  },
  modeColor:{
    backgroundColor:"red"

  }


})
type colors={
  primary:string
  
}

type GreetingProps = {
  name:string;

}

const Greeting = (props:GreetingProps)=>{
  return(
    <View style={styles.center}>
      <Text style={styles.fontBold}>TODO List</Text>

      <Text>{props?.name}</Text>
    </View>
  );

}
import { ThemeProvider, Button, createTheme } from '@rneui/themed';
const App = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <View style={styles.modeColor}>
      <Greeting name='vijay rajput'/>
      <Button onPress={() => updateTheme({ lightColors: { primary: 'red' } })} />

    </View>
  )
}

export default App