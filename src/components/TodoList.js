// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Item from './Todo';



const TodoList = props => {

console.log("conole props", props)
    return (
        <div className="todo-list">
            {props.itemsList.map(item => (
                <Item 
                toggleItemCompleted={props.toggleItemCompleted}
                key={item.id}
                item={item}/>
                
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear List
            </button>
        </div>
    );
};

export default TodoList; 