import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.itemHandler(this.state.value);
    }

    render() {
        return (
            <div className='inputForm'>
                {/* input text box */}
                <input type='text' name='todoInput' value={this.state.value} onChange={this.handleChange} placeholder='...todo' />

                {/* buttons to add and remove tasks */}
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )   
    }
}


export default TodoForm;