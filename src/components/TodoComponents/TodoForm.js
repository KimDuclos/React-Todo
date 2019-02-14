import React from 'react';

import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.itemHandler(this.state.value);
        this.setState({value: ''});
    }

    handleClear(event) {
        this.props.clearHandler();
    };

    render() {
        return (
            <div className='inputForm'>
                {/* input text box */}
                <input type='text' name='todoInput' value={this.state.value} onChange={this.handleChange} placeholder='...todo' />

                {/* buttons to add and remove tasks */}
                <button className="btn"  onClick={this.handleSubmit}>Add Todo</button>
                <button className="btn"  onClick={this.handleClear}>Clear Completed</button>
            </div>
        )   
    }
}


export default TodoForm;