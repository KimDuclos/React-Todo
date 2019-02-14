import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
     items: [  // constructor object to feed list and create state of list
        {
          task: '',
          id: 0,
          complete: false
        },
      ]
    }
    this.addNewItem = this.addNewItem.bind(this);
    this.clearList = this.clearList.bind(this);
    this.markComplete = this.markComplete.bind(this);
  };


  addNewItem(task) {
    const items = this.state.items.slice();
    const newItem = {
      task: task,
      id: Date.now(),
      complete: false
    }
    items.push(newItem);
    this.setState({items: items});
  }

  clearList(){
    const items = this.state.items.slice();
    const uncompleted = items.filter(item => !item.complete);
    this.setState({items: uncompleted});
  }

  markComplete(item) {
    const items = this.state.items.slice();
    const checkedItems = items.map( i => {
      if (i.id === item) {
        i.complete = true;
      }
      return i;
    });
    this.setState({items: checkedItems});
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} markComplete={this.markComplete} />
        <TodoForm itemHandler={this.addNewItem} clearHandler={this.clearList}/>
      </div>
    );
  } 
}

export default App;



//  // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state