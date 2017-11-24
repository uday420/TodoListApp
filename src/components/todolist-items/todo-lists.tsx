import * as React from "react";
import { todolist } from "../../models/todolist";


export interface ITodoListItems {
    listitems: Array<todolist>;
}

export const TodoListItems = (props: ITodoListItems) => {


    const render=()=>{
        if (props.listitems.length === 0) {
            return (<div>You don't have anything to-do!</div>);
        }
        
       return props.listitems.map((item, index) => {
            return (<li key={index}> <a href="tododetailitem/"{...index}> {item.Title}</a>  : {item.Completed ? "Completed" : "Pending"} </li>)
        });
    }

    return (
        <div>
            <ul>
            {render()}
            </ul>
        </div>
    );
}



// {
//     if (props.listitems.length > 0) {

//         props.listitems.map((item, index) => {
//             <span> {item.Title}  : {item.Completed ? "Completed" : "Pending"} </span>
//         });
//     }
// }
