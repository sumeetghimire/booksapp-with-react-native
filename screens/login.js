import React,{useState} from "react";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Button,
  Alert

} from 'react-native'

const login=({ route, navigation })=>{
  
  

  return (
    <>
    <View style={styles.container}>

   <Text style={styles.header} >Booksapp Login</Text>    
   
  <TextInput keyboardType="email-address" style={styles.textinput} placeholderTextColor="white" placeholder="Email or Phone" underlineColorAndroid
  ={'transparent'}/>
  <TextInput style={styles.textinput} placeholderTextColor="white" placeholder="Password" secureTextEntry={true} underlineColorAndroid
  ={'transparent'}/>

 <TouchableOpacity>
   <Text style={styles.button}>Login</Text>
 </TouchableOpacity>
 <TouchableOpacity>
   <Text style={styles.forgotpassword}>Forgot Password</Text>
 </TouchableOpacity>
 <Button title="Create Account"    onPress={() => navigation.navigate("signup", 
                        
                    )}/>
    </View>

    </>
  );
};
export default login;
const styles = StyleSheet.create({
  container:{
    flex:1,

    justifyContent:"center",
    backgroundColor:"#F96D41",
    alignSelf:'stretch',
    height:45,
    alignItems:'center'
  },
  header:
  {
    marginTop:40,
    fontSize:25,
    borderBottomColor:"#199187",
    borderBottomWidth:1,
    color:"white"

  },
  textinput:
  {
  
    alignSelf:'stretch',
    height:40,
    marginBottom:30,
    color:'white',
    borderBottomColor:'#f8f8f8',
    borderBottomWidth:1,
    fontSize:15,
    margin:20
  },
  forgotpassword:
  {
     height:30,
     marginBottom:30,
     margin:10,
  },
  button:{
  
    padding:20,
    backgroundColor:'#55cbbd',
    borderRadius:4,
    borderWidth:1,

  }
 
});  