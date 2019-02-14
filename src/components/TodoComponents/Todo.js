import React from 'react';


const Todo = props => {
    const handleClick = () => {
        props.markComplete(props.id);
    };
    return(
        <div style={{textDecoration: props.complete ? "line-through" : null}} onClick={handleClick}>
            {props.task}
        </div>
    ); 
}

export default Todo;