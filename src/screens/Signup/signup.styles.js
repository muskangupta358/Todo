import react from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#2596be',
        alignItems : 'center',
    },
    image : {
        height : 280,
        width : 410,
        borderBottomLeftRadius: 99999,
        borderBottomRightRadius: 99999,
    },
    text1 : {
        color : 'white',
        fontFamily : 'Avenir-Roman',
        fontSize : 40,
        marginVertical : 10,
    },
    text2 : {
        color : 'white',
        fontFamily : 'Avenir-Roman',
        fontSize : 15,
        marginVertical : 10,
    },
    text3 : {
      color : 'white',
      fontFamily : 'Avenir-Roman',
      fontSize : 13,
      marginVertical : 7,
      marginHorizontal : 17,
    },
    social:{
      justifyContent: 'space-around',
      alignItems : 'center',
      flexDirection:'row',
      flexWrap:'wrap',
      width:370,
      height:80
    },
    btn : {
        height : 50,
        width : 370,
        marginTop : 10,
        backgroundColor: '#2b5391',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 30,
    },
    btnText : {
        color : 'white',
        fontWeight : 'bold',
    }

});
