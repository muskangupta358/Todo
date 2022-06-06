import { addTodo,editTodo,deleteTodo } from "../actionConstants";

export const add = (item) => ({
type : addTodo,
payload : item,
});

export const edit = (index,item) => ({
    type : editTodo,
    payload : {index,item},
});

export const del = (index) => ({
    type : deleteTodo,
    payload : index,
});
