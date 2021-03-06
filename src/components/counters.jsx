import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

  render() {
    const { onDelete, onReset, onIncrement, counters} = this.props;
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={onReset}
        >
          Reset
        </button>
        {
          counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete.bind(this)}
              onIncrement={onIncrement}
            />
          ))
        }
      </div>
    );
  }
}

export default Counters;