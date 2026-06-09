import React, { Component } from "react";
import AddItems from "./Components/AddItems";
import TodoItems from "./Components/TodoItems";
import './App.css';

class App extends Component {
  state = {
    items : [
      {id:1, name:"Todo 0001", hours:'4 H'},
      {id:2, name:"Todo 0002", hours:'5 H'},
      {id:3, name:"Todo 0003", hours:'3 H'}
    ],
  }

  deleteItems = (id) => {
    let items = this.state.items.filter(item => item.id !== id)
    this.setState({items})
  }

  AddItem = (item) => {
    // item.id = Math.random()
    // item.id = `${Date.now()}-${Math.random()}`
    item.id = crypto.randomUUID()
    let items = this.state.items
    items.push({...item, hours: item.hours + ' H'})
    this.setState({items})
  }

  render() {
    return (
      <div className="App">
        <h1>React To Do App</h1>
        <AddItems AddItem={this.AddItem}/>
        <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>
      </div>
    )
  }
}

export default App;