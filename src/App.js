import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     items: [  // constructor object to feed list and create state of list
        {
          task: '',
          id: '',
          complete: false
        },
      ]
    }
  };
}

 addTask = e => {
   const items = this.state.items;
   items = items.push(items.task)
 }

 changeToComplete = e => {

 }

 removeTask = e => {
   const items = this.state.items;
   items
 }


export default App;


 // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state