import React,{useState} from "react";
import axios  from 'axios'

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

const [name,setName] = useState();
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [isSubmit,setIsSubmit] = useState(false);

const signup=({ route, navigation })=>{
  
  return (
    <>
    <View style={styles.container}>

   <Text style={styles.header} >Create New Account</Text>    
      
  <TextInput onChangeText={(text) => setName(text)} style={styles.textinput} placeholderTextColor="white" placeholder="Full Name" underlineColorAndroid
  ={'transparent'}/>
  <TextInput onChangeText={(text) => setEmail(text)} keyboardType="email-address" style={styles.textinput} placeholderTextColor="white" placeholder="Email or Phone" underlineColorAndroid
  ={'transparent'}/>
  <TextInput onChangeText={(text) => setPassword(text)}  style={styles.textinput} placeholderTextColor="white" placeholder="Password" secureTextEntry={true} underlineColorAndroid
  ={'transparent'}/>

 <TouchableOpacity onPress={() => setIsSubmit(true)}>
   <Text style={styles.button}>Sign Up</Text>
 </TouchableOpacity>

 <Button title="Already Have An Account?"    onPress={() => navigation.navigate("login",)}/>
    </View>

    </>
  );
};
export default signup;
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
    margin:10

  }
 
});  