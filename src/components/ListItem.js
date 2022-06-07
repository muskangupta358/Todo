import React,{ useState } from 'react';
import { Text, View,Image ,TouchableOpacity,Button,StyleSheet} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function ListItem(props){
    
    const [show,setShow] = useState(false)

    return (
        <View style={styles.main}>
            <BouncyCheckbox
                size={25}
                fillColor="#2596be"
                unfillColor="#FFFFFF"
                textComponent = {<Text style = {styles.heading}>{props?.text || 'Todo'}</Text>}
                iconStyle={{ borderColor: "#2596be" }}
            />
            <TouchableOpacity style = {{position:'relative'}} onPress={()=>{setShow(!show)}}>
                <Image style = {styles.menuImage} source={require('../assets/menuColored.png')}/>
                {show && <View style = {[styles.subView,styles.shadow]}>
                    <TouchableOpacity onPress={props?.delete}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props?.rename}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                </View>}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main : {
        height : 70,
        flexDirection: 'row',
        flexWrap : 'wrap',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 20,
        backgroundColor : 'white'
    },
    image : {
        height : 30,
        width : 30,
    },
    menuImage : {
        height : 25,
        width : 25,
    },
    heading : {
        color : 'black',
        fontSize : 20,
        marginLeft : 20
    },
    subView : {
        backgroundColor : 'white',
        height : 40,
        width : 100,
        position :'absolute',
        right : 25,
        top : 0,
        zIndex : 99999,
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    shadow : {
        shadowColor: 'black',
        elevation: 5,        
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        } }

});