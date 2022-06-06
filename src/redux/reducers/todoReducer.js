import { addTodo,editTodo,deleteTodo } from "../actionConstants";

const initialState = {
    data: []
  };

const todoReducer = (state=initialState,action) => {
    switch(action.type){
        case addTodo : {
            return {...state, data : [...state.data,action.payload]};
        }
        case editTodo : {
            let updatedArray = [...state.data];
            updatedArray[action.payload.index] = action.payload.item;
            return {...state, data : updatedArray};
        }
        case deleteTodo :
            {
                let deletedArray = [...state.data];
                deletedArray.splice(action.payload,1)
                return {...state, data : deletedArray};
            }
        default : return state
    }

};

export default todoReducer;