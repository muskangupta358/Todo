import * as React from 'react';
import {View, StyleSheet,TouchableOpacity,Image } from 'react-native';

export default function BackBtn(props){
  return (
    <View style = {styles.button}>
        <TouchableOpacity style = {styles.headerBtn} onPress = {props.onClick}>       
            <Image style = {styles.logo} source={require('../assets/backButton.png')} tintColor='#2b5391'/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button : {
        width: 50,
        height: 50,
        position : 'absolute',
        top : 30,
        left : 10,
        zIndex: 1,
    },
    logo : {
        width: 50,
        height: 50,
        tintColor: "#2b5391"
    },
    headerBtn : {
        justifyContent : 'center',
        alignItems : 'center',
        height: 50,
        width : 50,
        marginLeft:10,
        marginTop : 30,
    }
});