import React,{useState,useEffect} from 'react';
import { Text, View,Image ,TouchableOpacity,Animated,FlatList,Easing, Alert} from 'react-native';
import database from '@react-native-firebase/database';
import styles from './todoScreen.styles';
import ListItem from '../../components/ListItem';
import Input from '../../components/Input';
import UserView from '../../components/userView';

import { connect } from 'react-redux';
import {add,edit,del, setInitial} from '../../redux/actions/todoActions'


function TodoScreen(props){

    const [heightMenu,setHeightMenu] = useState(new Animated.Value(0));
    const [todo, setTodo] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(false);

    useEffect(() => {
        database()
            .ref('/Users')
            .once('value', snapshot => {
            setData(snapshot.val())
            });
    }, []);


    useEffect(() => {
        database()
            .ref('/Users')
            .once('value', snapshot => {
            userData(snapshot.val())
            });
    }, [props.data]);

    
    const userData = (data) => {
        for(let x in data)
        {
            if(data[x].email == props?.route.params.user){
                database().ref(`/Users/${x}`).update({data : props.data})
            }
        }        
    }

    const setData = (data) => {
        for(let x in data)
        {
            if(data[x].email == props?.route.params.user){
                props.setInitial(data[x])
            }
        }        
    }

    const renderItem = ({ item,index }) => (
        <ListItem text={item.todo} 
        delete={()=>{props.del(item.todoId)}} 
        rename={()=>{addMenu();
            setIsEdit(true);
            setEditId(item.todoId)
        }}/>
    );

    const addMenu = () =>{
        Animated.timing(heightMenu, {
            toValue: 250,
            duration: 400,
            easing : Easing.elastic(1),
            useNativeDriver: false,
          }).start();
      }

    const cancelMenu = () =>{
        Animated.timing(heightMenu, {
            toValue: 0,
            duration: 30,
            useNativeDriver: false
          }).start();
        setIsEdit(false)
    }

    const pull_todo = (data) => {
        setTodo(data)
        
    }
    return (
        <View style={styles.container}>

            <View style = {[styles.introView,styles.shadow]}>
                <UserView/>
            </View>
            <FlatList 
                style = {styles.listView}
                data={props.data}
                renderItem={renderItem}
            />

            <TouchableOpacity style = {styles.addBtn} onPress={addMenu}>
            <Image style = {{height:30,width:30}} source={require('../../assets/plus.png')}/>
            </TouchableOpacity>

            <Animated.View style={[styles.animatedView,{height: heightMenu}]}>
                <View style={styles.animatedSubview}>
                    <TouchableOpacity onPress={cancelMenu} >
                        <Image style = {styles.cancelImage} source={require('../../assets/close.png')}/>
                    </TouchableOpacity>
                    <Text style = {styles.animatedText} >{isEdit ? 'Edit Todo' : 'Create Todo'}</Text>
                </View>
                <Input text={isEdit ? 'Change Todo' : 'Add New Todo'} onChangeText={pull_todo} value={todo}/>
                <TouchableOpacity style = {[styles.saveBtn,styles.shadow]} onPress={() => {
                    if(todo == ''){
                        Alert.alert('Please enter some value')
                    }
                    else{
                        {isEdit ? (props.edit(editId,{todo : todo})) :
                        (props.add({
                            todo:todo,
                            todoId : new Date().getTime(),
                        }))};
                        setTodo('')
                        cancelMenu();
                    }
                        }}>
                    <Text style ={{color : 'white',fontWeight : 'bold'}}>Save</Text>
                </TouchableOpacity>
            </Animated.View >

        </View>
    );
}



const mapStateToProps = (state) => {
    return {
      data : state.todoReducer.data
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        setInitial : (item) => dispatch(setInitial(item)),
        add : (item) => dispatch(add(item)),
        edit : (id,item) =>  dispatch(edit(id,item)),
        del : (id) =>  dispatch(del(id)),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoScreen)