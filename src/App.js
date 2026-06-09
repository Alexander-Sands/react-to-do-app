import React, { Component } from "react";
import AddItems from "./Components/AddItems";
import TodoItems from "./Components/TodoItems";
import './App.css';

class App extends Component {
  state = {
    items : [
      {id:1, name:"Learn React Basics", hours:'4', completed: false},
      {id:2, name:"Build Todo App UI", hours:'5', completed: false},
      {id:3, name:"Practice CSS Grid", hours:'3', completed: false}
    ],
  }

  toggleComplete = (id) => {
    const items = this.state.items.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    });

    this.setState({ items });
  };

  deleteItems = (id) => {
    let items = this.state.items.filter(item => item.id !== id)
    this.setState({items})
  }

  AddItem = (item) => {
    // item.id = Math.random()
    // item.id = `${Date.now()}-${Math.random()}`
    item.id = crypto.randomUUID()
    let items = this.state.items
    items.push({...item, hours: item.hours})
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <h1>React To Do App</h1>
        <AddItems AddItem={this.AddItem}/>
        <TodoItems items={this.state.items} toggleComplete={this.toggleComplete} deleteItems={this.deleteItems}/>
      </div>
    )
  }
}

export default App;