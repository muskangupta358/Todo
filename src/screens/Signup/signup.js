import React,{useState} from 'react';
import { Text, View,Image,TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import showAlert from '../../lib/AlertWrapper';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

import Input from '../../components/Input';
import BackBtn from '../../components/backBtn';
import valid_email from '../../lib/validEmail';
import styles from './signup.styles';

export default function SignUp(props){

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmpass] = useState('');


  const signUp = (email,pass) => {
    auth()
    .createUserWithEmailAndPassword(email,pass)
    .then(() => {
      const userID = new Date().getTime();
      database().ref('/Users').update({
        [userID] : {
          email : email,
          username : user,
          data : [{todo : 'First todo' , todoId : new Date().getTime()}]
        }
      })
      .then(() => console.log('User set in database'));
      console.log('User account created & Logged in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
          showAlert('This email is already in use')
      }
      else if (error.code === 'auth/invalid-email') {
        showAlert('That email address is invalid!')
      }
      else{
        showAlert(JSON.stringify(error.code))
      }
    });
  }

  const pull_email = (data) => {
    setEmail(data)
  }

  const pull_pass = (data) => {
    setPass(data)
  }

  const pull_user = (data) => {
    setUser(data)
  }

  const pull_confirmpass = (data) => {
    setConfirmpass(data)
  }
  return (
    <KeyboardAwareScrollView>
    <View style = {styles.main}>

      <View style = {styles.shadow}>
        <BackBtn onClick={() => props.navigation.goBack()}/>
        <Image style = {styles.image} source={require('../../assets/Flower.webp')} />
      </View>

      <Text style={styles.text1}>Sign Up</Text>
      <Text style={styles.text2}>Create your account</Text>
      <Input text={'Username'} onChangeText={pull_user} value={user} style={{width : 350}} />
      <Input text={'Email Address'} onChangeText={pull_email} value={email} onBlur={()=>{valid_email(email)}} style={{width : 350}} />

      <View style = {{flexDirection:'row', flexWrap:'wrap',justifyContent:'space-around'}}>
        <Input text={'Password'}  onChangeText={pull_pass} value={pass} protected={true} style={{width : 150}}/>
        <Input text={'Confirm Password'}  onChangeText={pull_confirmpass} value={confirmpass} protected={true} style={{width : 150}}/>
      </View>

      <Text style={[styles.text3]}>By registering, you are agreeing to our Terms of use and Privacy Policy</Text>

      <TouchableOpacity style={[styles.btn,styles.shadow]} onPress={()=>{
        if(user == ''){
            showAlert('Please Enter Username')
        }
        else if(email == ''){
            showAlert('Please Enter email')
        }
        else if(pass == ''){
            showAlert('Please Enter password');
        }
        else if(confirmpass == ''){
            showAlert('Please Enter confirm password')
        }
        else if(pass !== confirmpass){
            showAlert('Passwords do not match');
        }
        else{
            signUp(email,pass)
        }
        }}>
          <Text style={styles.btnText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style = {{flexDirection:'row', flexWrap:'wrap',marginBottom : 30}}>
        <Text style={styles.text2}>Already have an account? </Text>
        <Text style={[styles.text2,{fontWeight : 'bold'}]} onPress={()=>{props.navigation.navigate('Login',{})}}>Login</Text>
      </View>

    </View>
    </KeyboardAwareScrollView>
  );
}