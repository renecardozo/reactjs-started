import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: [
        { id: 1, value: 1 },
        { id: 2, value: 4 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ]
    }
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = this.state.counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  }
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter( c => c.value>0).length}/>
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
