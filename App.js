import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet,
        Text, 
        View,
        TextInput,
        TouchableOpacity,
        StatusBar
} from 'react-native';

type Props = {};
export default class App extends component<Props>  {
  render(){
    return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor="#le90ff"
      barStyle = "light-content"
      />
      <Text styles={styles.welcome}>Login to my App</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry
      />
      <View style={styles.btnContainer}>
          <TouchableOpacity 
          style={styles.userBtn}>
          onPress={() => alert("Login works")}
            <text style = {styles.btnTxt}>
              Login
            </text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.userBtn}>
          onPress={() => alert("Signup works")}
            <text style = {styles.btnTxt}>
              Signup
            </text>
          </TouchableOpacity>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#le90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color:"#fff",
    fontFamily: "DancingScript-bold"
  },
  input: {
    width="90%",
    backgroundColor="#fff",
    padding: 15,
    marginBottom:10,
  },
  btnContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"90%"
  },
  UserBtn:{
    backgroundColor:"#FFD700",
    padding:15,
    width="45%"
  },
  btnTxt:{
    fontSize:18,
    textAlign:"center"
  }
});
