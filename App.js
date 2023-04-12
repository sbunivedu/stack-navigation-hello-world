import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Root = createNativeStackNavigator()

const Screen1 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('Second Screen')
      }}
    />
  </View>
)

const Screen2 = ({ navigation, route }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Screen 2</Text>
    <Button
      title="Go back"
      onPress={() => {
        navigation.pop()
      }}
    />
  </View>
)

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="First Screen" component={Screen1} />
        <Root.Screen name="Second Screen" component={Screen2} />
      </Root.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
})
