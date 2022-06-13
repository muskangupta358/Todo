import React,{useState} from 'react';
import { Text, View,Image,TouchableOpacity,Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import Input from '../../components/Input';
import valid_email from '../../lib/validEmail';
import styles from './login.styles';

export default function Login(props){

  const [email, setEmail] = useState();
  const [pass, setPass] = useState();


  const login = (email,pass) => {
    if(email == '')
    {
        Alert.alert('Please Enter Email')
    }
    else if(pass == '')
    {
        Alert.alert('Please Enter Password')
    }
    else{
        auth().signInWithEmailAndPassword(email, pass)
        .then(() => {
            console.log('Logged in!');
        })
        .catch(error => {
            Alert.alert('Please Sign Up first')
        });
    }
  }

  const pull_email = (data) => {
    setEmail(data)
  }

  const pull_pass = (data) => {
    setPass(data)
  }
  

  return (
    <KeyboardAwareScrollView>
    <View style = {styles.main}>
      <View style = {styles.shadow}>
      <Image style = {styles.image} source={require('../../assets/Flower.webp')}/>
      </View>
      <Text style={styles.text1}>Welcome Back</Text>
      <Text style={styles.text2}>Login to your account</Text>
      <Input text={'Username'} onChangeText={pull_email} value={email} onBlur={()=>{valid_email(email)}} style={{width : 350}} />
      <Input text={'Password'} onChangeText={pull_pass} value={pass} protected={true} style={{width : 350}}/>
      
      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{login(email,pass)}} >
          <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>

      <View style = {{flexDirection:'row', flexWrap:'wrap',marginBottom:50}}>
        <Text style={styles.text2}>Don't have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('SignUp',{})}}>Sign Up</Text>
      </View>
    </View>    
    </KeyboardAwareScrollView>
  );
}
