/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
  center:{
    alignItems:'center',
  },
  fontBold:{
    fontWeight:"bold",
  }


})
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
const App = () => {
  return (
    <View>
      <Greeting name='vijay rajput'/>
    </View>
  )
}

export default App