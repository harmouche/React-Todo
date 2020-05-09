import React from 'react';

// the Item component is the format/shape of every single data unit
const Item = props => {
    // this props will feed the Item component with the data array
       console.log("hh: Todo.js: items array ", props.item.task)


       // the handleClick function will receive the item.id through props from toggleIemCompleted, on click it will triger the change in classNAme the of the item based on the item.completed value.
       const handleClick = e => {
           props.toggleItemCompleted(props.item.id);
           console.log("hh:")
       };


    return (
        <div
        onClick={handleClick}
        className={`item${props.item.completed ? " completed" : ""}`}>
            <p>{props.item.task}</p>
            {/* <p>{props.item.id}</p> */}
           
        </div>
          
    );
    
};


export default Item;