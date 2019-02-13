import React from 'react';
import Todo from './Todo';

// your components will all go in this `component` directory.

//  map over all task objects in the array and put them in a component

const TodoList = () => {
    return (
      <div className="list">
        {items.map(item => (
            <Item item={item} />
        ))}
      </div>
    );
}

export default TodoList;