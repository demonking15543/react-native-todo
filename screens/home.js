import React from 'react'

import { View, Text, StyleSheet, Alert } from 'react-native'
import { Button } from "@react-native-material/core";

function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        onPress={()=>navigation.navigate("Profile", {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        title="Profile"
        />
      </View>
    );
  }
  export default HomeScreen