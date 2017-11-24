import { IAppAction } from '../app-action';
import { ITodolistState,getDefaultTodolistState } from '../state/todolist-state'
import { todolistStateAction } from '../actions/todolist-state-actions';


const handler = {
[todolistStateAction.TodoList_Add_Item]:(state:ITodolistState,payload:any):ITodolistState =>({
...state,
listitems:state.listitems.concat([payload])
})
};

const todolistReducer = (state: ITodolistState = getDefaultTodolistState(),action:IAppAction) =>
{
    return handler.hasOwnProperty(action.type)?handler[action.type](state,action.payload):state;
};

export default todolistReducer;