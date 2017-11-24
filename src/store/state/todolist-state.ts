
import { todolist } from "../../models/todolist";

export interface ITodolistState {
    listitems:Array<todolist>;
}

const defaultState ={   
    listitems:[]
}

export const getDefaultTodolistState=(Option?:any)=>{
    return {
        ...defaultState
    };
};