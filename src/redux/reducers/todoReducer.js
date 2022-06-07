import { addTodo,editTodo,deleteTodo,setInitialstate} from "../actionConstants";

const initialState = {
    data: []
  };

const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case setInitialstate : {
            return {...state, data : action.payload.data}
        }
        case addTodo : {
            return {...state, data : [...state.data,action.payload]};
        }
        case editTodo : {
            return {...state, data : state.data.map(obj => obj.todoId === action.payload.id ? {...obj,...action.payload.item} : obj)}
        }
        case deleteTodo :
            {
                return {...state, data : state.data.filter(obj => obj.todoId !== action.payload)} ;
            }
        default : return state
    }

};

export default todoReducer;