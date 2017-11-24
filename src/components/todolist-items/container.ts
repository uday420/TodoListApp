import { IAppState } from "../../store/state/app-state";
import { Dispatch, connect } from "react-redux";
import { TodoListItems } from "./todo-lists";


const mapStateToProps = (state:IAppState) => {
return {
    listitems:state.todolist.listitems
}
};

const mapDispatchToProps= (dispatch:Dispatch<IAppState>)=>{
    return {
     
    }
}

export const TodoListItemsContainer = connect(mapStateToProps,mapDispatchToProps)(TodoListItems)