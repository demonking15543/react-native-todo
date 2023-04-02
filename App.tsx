/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'
import {useColorScheme} from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import ProfileScreen from './screens/profile';

const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
  center:{
    alignItems:'center',
  },
  fontBold:{
    fontWeight:"bold",
  },
  modeColor:{
    backgroundColor:"red"

  },
  whiteText:{
    color:"white"
  },
  darkText:{
    color:"black"
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
  const colorScheme = useColorScheme();
  const  isDarkMode = useColorScheme() === "dark"
  const alertMessage = () => {
  
  } 

  return (
    // <View>
    //   <Greeting name='vijay rajput'/>
    //   <Text
    //   style={isDarkMode? styles.whiteText:styles.darkText}
    //   >useColorScheme(): {colorScheme}</Text>
    //     <Button title="Click Me" onPress={() =>Alert.alert("Here me are")}/>



    // </View>
  <>
    <AppBar
    title="Title"
    subtitle="Lorem ipsum"
    centerTitle={true}
    // leading={props => (
    //   <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
    // )}
    // trailing={props => (
    //   <IconButton
    //     icon={props => <Icon name="dots-vertical" {...props} />}
    //     {...props}
    //   />
    // )}
  />
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  </NavigationContainer> 
</>



  )
}

export default App