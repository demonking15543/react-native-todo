import { View, Text, StyleSheet, Alert } from 'react-native'
import React from 'react'

import { Button } from "@react-native-material/core";

function ProfileScreen({route, navigation}) {
    const {itemId, otherParam} = route?.params
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Item id: {JSON.stringify(itemId)}</Text>
        <Text>otherParams: {JSON.stringify(otherParam)}</Text>

        <Button
        onPress={()=>navigation.navigate("Home")}
        title="Home"
        />

      </View>
    );
  }

export default ProfileScreen