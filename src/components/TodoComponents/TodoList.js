import React from 'react';

import Todo from './Todo';


const TodoList = props => {
    const todoItems = props.items.map(item => {
        return (
            <Todo task={item.task}
                  key={item.id}
                  markComplete={props.markComplete}
                  complete={item.complete}
                  id={item.id}/>
        );
    })
    return (
        <div>
            {todoItems}
        </div>
    );
};

export default TodoList;