import * as React from 'react';
import auth from '@react-native-firebase/auth';
import { Text, View,Image ,TouchableOpacity,StyleSheet} from 'react-native';

export default function UserView(props){

    const logout = () =>{
        auth()
        .signOut()
        .then(() => {
            console.log('User signed out!')
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return(
        <View style = {styles.introView}>
            <View style = {styles.subView}>
                <Text style = {styles.textMoney}>My Todo</Text>
                <Text style={styles.textSmall}>Lets Get Listed</Text>
            </View>
            <View style = {styles.subView}>
                <TouchableOpacity onPress={()=>{logout()}}>
                    <Image style = {styles.profileImg} source={require('../assets/logout.png')}/>
                </TouchableOpacity>
                <Text style={styles.textSmall}>Logout</Text>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({

    introView : {
        height : 200,
        backgroundColor:'#2596be',
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent : 'space-around',
      },
    

    subView : {
        marginTop : 60,
        justifyContent : 'center',
        alignItems : 'center',
      },
      profileImg : {
        height : 50,
        width : 50,
        tintColor : 'white',
      },
      textMoney : {
        fontSize : 50,
        color : 'white',
      },
      textSmall : {
        fontSize : 15,
        color : 'white',
        marginTop : 5
      },
})