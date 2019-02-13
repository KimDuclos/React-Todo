import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.

const TodoList = props => {
    return (
        <div className="listComponent">
            {props.tasksTodo.map(taskToDo => (
                // component to output tasks
                <taskToDo complete={props.complete} idNum={taskToDo.id} taskToDo={taskToDo}/>
            ))}
        </div>
     );
};

export default Todo;