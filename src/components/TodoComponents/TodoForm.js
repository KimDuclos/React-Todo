import React from 'react';

const TodoForm = props => {
    return (
        <div className='inputForm'>
            <form>
                {/* input text box */}
                <input type='text' name='todoInput' value='inputValue' placeholder='...todo' />

                {/* buttons to add and remove tasks */}
                <button className='btn' onClick={props.addTask}>Add Todo</button>
                <button className='btn' onClick={props.clearTasks}>Clear Completed</button>
            </form>
        </div>
    );
}

export default TodoForm;