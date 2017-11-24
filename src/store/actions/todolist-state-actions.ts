import { todolist } from "../../models/todolist";
import { IAppAction } from "../app-action";

/**
 * Define the sates actions 
 * Note : Actions needs to be unique across
 */
export const todolistStateAction ={
TodoList_Add_Item:"TodoList_Add_Item"
};


export const AddTodoItem=(todolist:todolist):IAppAction => (
    {
        type: todolistStateAction.TodoList_Add_Item,
        payload:todolist
    }
);