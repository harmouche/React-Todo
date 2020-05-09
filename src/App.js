import React from 'react';
import ReactDom from "react-dom";

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const itemsList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Clean Car',
    id: 1528817084333,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.

  constructor () {
    super();
    this.state = {
      itemsList
    };
  };

  // this component is going to take care of state, and any change handlers you need to work with your state
 
  // the toggleItemCompleted function will pass the item.id and toggle the value of item.completed value each time the function is called(the function will be invoked by handleChange function in Todo.js).
 toggleItemCompleted = itemId => {
   this.setState({
     itemsList: this.state.itemsList.map(item =>{
      if (itemId === item.id) {
      return {
        ...item,
        completed: !item.completed
      };
      }
      console.log("toggle function")
      return item;
          })
    });
  };

// add new item

addNewItem = itemName => {
  console.log("hh: App.js: addNewItem: itemName: ", itemName);
  this.setState({
    itemsList: [
      ...this.state.itemsList,
      {task: itemName, id: Date.now(), completed: false}
    ]
  });
};

clearCompleted = () => {
  console.log("hh: App.js: clearCompleted", this.clearCompleted);
  this.setState({
    itemsList: this.state.itemsList.filter(item => {
      return !item.completed;
    })
  });
};
 
  render() {
    return (
      <div className="App">
        <div className="header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewItem={this.addNewItem} />
      </div>
      <TodoList 
      toggleItemCompleted={this.toggleItemCompleted}
      itemsList={this.state.itemsList}
      clearCompleted={this.clearCompleted}
      />
      </div>
    );
  }
}

export default App;
