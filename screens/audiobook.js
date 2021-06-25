import React,{useState} from "react";
import { Item } from "native-base";

import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,

} from 'react-native'
import WebView from "react-native-webview";


const audiobook = () => {
  
  return(
    <>
try {
  
  SoundPlayer.playUrl('https://example.com/music.mp3')
} catch (e) {
    console.log(`cannot play the sound file`, e)
}


    </>
  )
};
export default audiobook;
