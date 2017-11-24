import * as React from "react";
import { todolist } from "../../models/todolist";




export interface ISearchBarProps {
todolist:Array<todolist>;
AddTodo(todolist:todolist):void;
}

interface ISearchBarState {
    title:string;
    description:string;
    completed:boolean
}

/**
 * State less component use it for display purposes eg.
 * export const SearchBar = (props:ISearchBarProps)=>{
 */

 /**
  * Notes: Default constructor needed when creating sate component so it can set the default val()
  */
export class SearchBar extends React.Component<ISearchBarProps,ISearchBarState>{
constructor(props:ISearchBarProps){
    
    super(props);
    this.state ={
        title:"",
        completed:false,
        description:""        
    };
};

/**
 * set the values into the sate while typing 
 * @param key 
 * @param value 
 */
setFormState(key: string, value:any) {    
    this.setState({
        ...this.state,
        [key]:value
    })
}

/**
 * Init() new obj and set the values from state before passing 
 */
onClick(){
const values:todolist ={
Title:this.state.title,
Description:this.state.description,
Completed:this.state.completed
}
this.props.AddTodo(values);
}

    render(){
return(
    <div className="App-intro">
        <br/>    
        <span>
        <label>Title :</label>
        <input type="text" required placeholder="Add your to-do task" onChange={e=> this.setFormState('title', e.target.value)} />
        </span>
        <br/>
        <span>
        <label>Description </label>
        <textarea onChange={e=>this.setFormState("description",e.target.value)} />
        </span>
        <br/>
        <span> 
        <label>completed</label> 
        <input type="checkbox" onChange={e=>this.setFormState("completed",e.target.checked)} />
        </span>
        <br/>
        <button onClick={()=> this.onClick()} >Add</button>        
    </div>
);
}
}
