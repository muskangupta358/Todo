import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container : {
      flex : 1,
      position : 'relative',
      backgroundColor:'#e1e2e3',
      
  },
  addBtn : {
    justifyContent : 'center',
    alignItems : 'center',
    height: 70,
    width : 70,
    borderRadius : 40,
    backgroundColor : '#2596be',
    position : 'absolute',
    bottom : 50,
    right : 30,
  },
  addSign : {
    color : 'white',
    fontSize : 40,
  },

  introView : {
    height : 200,
    backgroundColor:'#2596be',
    marginBottom : 40,
  },

  listView: {
    flex : 1,
    backgroundColor:'#e1e2e3',
  },    
    
  shadow : {
        shadowColor: 'black',
        elevation: 5,        
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        } 
  },
  
  animatedView : {
    backgroundColor:'white',
    borderTopLeftRadius : 20,
    borderTopRightRadius : 20,
  },
  animatedSubview : {
    flexDirection : 'row',
    flexWrap : 'wrap',
    borderBottomWidth : 1,
    borderBottomColor : '#e1e2e3',
    height : 50,
    paddingVertical : 10,
    paddingLeft : 15,
  },
  cancelImage : {
    marginTop : 5,
    height : 15,
    width : 15,
  },
  animatedText : {
    fontSize : 20,
    marginLeft : 30,
    color : '#2596be',
  },
  saveBtn : {
    height : 50,
    marginTop : 0,
    margin : 20,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: '#2596be',
  }
});

export default styles;
