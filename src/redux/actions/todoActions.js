import { addTodo,editTodo,deleteTodo,setInitialstate } from "../actionConstants";

export const setInitial = (item) => ({
    type : setInitialstate,
    payload : item
})

export const add = (item) => ({
type : addTodo,
payload : item,
});

export const edit = (id,item) => ({
    type : editTodo,
    payload : {id,item},
});

export const del = (id) => ({
    type : deleteTodo,
    payload : id,
});
