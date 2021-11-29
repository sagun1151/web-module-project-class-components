import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './style.css'

const chores = [
  {
  task: 'Homework',
  id: 1,
  completed: false
  },
  {
  task: 'workout',
  id:2,
  completed:false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      chores:chores
    }
  }
  handleToggle = (x) => {
    x.preventDefault();
    this.setState({
      ...this.state,
      chores: this.state.chores.filter(chore => {
        return (!chore.completed)
      })
    }); 
  }

  handleAddChore = (chore) => {
    const newChore = {
      task: chore,
      id: Date.now,
      completed: false
    };

    this.setState({
      ...this.state,
      chores: [...this.state.chores, newChore]
    });
  }

  handleToggleChore = (item) => {
    this.setState({
      ...this.state,
      chores: this.state.chores.map(x => {
        if(x.id === item.id){
          return {...x, completed: !x.completed};
        }
        else {return x;}
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList  handleToggleChore={this.handleToggleChore} chores={this.state.chores} />
        <TodoForm handleAddChore={this.handleAddChore} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;
