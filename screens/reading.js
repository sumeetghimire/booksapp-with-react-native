import React,{useState} from "react";
import { Item } from "native-base";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Animated

} from 'react-native'
import WebView from "react-native-webview";


const url='https://books.google.co.in/books?id=m51E0wDM8JAC&newbks=0&lpg=PP1&pg=PP1&output=embed';

const reading = ({route,navigation}) => {
const bookname=route.params.book
  return(
    <>
    
  <View>
    
    <WebView  
    source = {{ uri:'https://books.google.co.in/books?id=m51E0wDM8JAC&newbks=0&lpg=PP1&pg=PP1&output=embed' }}  
/>  
 
  </View>
    </>
  )
};
export default reading;
