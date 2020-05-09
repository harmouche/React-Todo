import React from 'react';
import TodoList from './TodoList';


class TodoForm extends React.Component {
// constructor with state to handle the newly added items
    constructor () {
        super();
        this.state = {
            newItemName: ""
        };
    };


    // update the state with each keystroke (click)
    handleChange = e => {
        e.preventDefault();
        this.setState ({
            newItemName : e.target.value
        });
    };

    // send class property (props) to submit form
handleSubmit = e => {

    e.preventDefault();
    this.props.addNewItem(this.state.newItemName);
};

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
              <input 
                type="text"
                name="item"
                value={this.state.newItemName}
                onChange={this.handleChange}
              />
                <button>Add</button>
            </form>
        );
    };
};

export default TodoForm;