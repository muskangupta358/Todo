import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image ,Platform} from 'react-native';

export default function Header(props){
  return (
    <View style={[styles.container,props?.style]}>
        <TouchableOpacity style = {styles.button} onPress = {props.onClick}>       
            <Image style = {styles.logo} source={require('../assets/back.png')} tintColor='#2b5391'/>
        </TouchableOpacity>
        <Text style = {styles.title}>{props?.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems : 'center',
    },
    button : {
        marginLeft : 10,
    },
    logo : {
        height : 35,
        width : 35,
    },
    title : {
        fontSize : 30,
        marginTop : Platform.OS == 'ios' ? 50 : 0,
        margin : 30,
    },

});