import React from 'react';

import './Todo.css';


const Form = () => {
    return (
        <div className='inputForm'>
            <input onChange={this.changeHandle} placeholder="...todo" />
            <button className='btn' onClick={this.addTask}>Add Todo</button>
            <button className='btn' onClick={this.removeTask}>Clear Completed</button>
        </div>
    );
}

export default Form;