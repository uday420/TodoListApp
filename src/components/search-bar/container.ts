import { IAppState } from "../../store/state/app-state";
import { Dispatch, connect } from "react-redux";
import { todolist } from "../../models/todolist";
import { AddTodoItem } from "../../store/actions/todolist-state-actions";
import { SearchBar } from "./search-bar";

const mapStateToProps = (state:IAppState) => {
return {
    todolist:state.todolist.listitems
}
};

const mapDispatchToProps= (dispatch:Dispatch<IAppState>)=>{
    return {
        AddTodo(todolist:todolist):void{
            dispatch(AddTodoItem(todolist));
        }
    }
}

export const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(SearchBar)