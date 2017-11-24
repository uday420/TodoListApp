import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { TodoListContainer } from './components/search-bar/container';
import { TodoListItemsContainer } from './components/todolist-items/container';
//import { TodoListItems } from './components/todolist-items/todo-lists';
const logo = require('./logo.svg');

class App extends React.Component<{store:any}> {
  render() {
    return (
      <Provider store={this.props.store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Todo-List App</h2>
        </div>
        
        <TodoListContainer  />
        <TodoListItemsContainer />
        {/* <TodoListItems /> */}
      </div>
      </Provider>
    );
  }
}

export default App;
