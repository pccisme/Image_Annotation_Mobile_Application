import React, { Component } from 'react';
import { Canvas, Image } from 'react-native-canvas';
import { Text, View, Button,StyleSheet,TextInput,KeyboardAvoidingView,Switch,Platform,AppRegistry,Alert,Dimensions } from 'react-native';
var fullwidth = Dimensions.get('window').width; //full width
var fullheight = Dimensions.get('window').height; //full height

 
export default class Cavas extends Component {
 
  handleCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    var mouseClickPosition =[];
    var imgObj = new Image(canvas);
    var imagedata = '../assets/images/test1.jpg'
    imgObj.addEventListener('load',()=>{
      debugger
      console.log('image is loaded');
      context.drawImage(image, 0, 0, 100, 100);
    })
  }
 
  render() {
    return (
      <Canvas ref={this.handleCanvas}/>
    )
  }
}