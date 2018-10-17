import  React, { Component } from 'react';

class Counter extends Component {

  

  constructor(){
    super();
    // this.handleIncrement = this.handleIncrement.bind(this);
    this.state = {
      count: 0,
      tags: []
    };
  }

  componentDidMount = () => {
    this.setState({
      count: this.props.counter.value,
      tags: ['tag1', 'tag2', 'tag3']
    });
  };
  
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : this.props.counter.value;
  };

  renderTags() {
    if(this.state.tags.length === 0) return <p>There are no tags!</p>
    return <ul>
      {
        this.state.tags.map(tag => <li key={tag}>{tag}</li>)
      }
    </ul>
  };

  // handleIncrement() {
  //   this.setState({count: this.state.count + 1});
  // };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className='btn btn-secondary btn-sm'
          onClick={() => {this.props.onIncrement(this.props.counter)}}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onDelete.bind(this, this.props.counter.id)}>Delete</button>
        {/* {this.state.tags.length === 0 && 'Please create a new tag'}
        {this.renderTags()} */}
      </div>
    )
  };

  getBadgeClasses() {
    let classes = 'badge m-2 ';
    classes += this.props.counter.value === 0 ? 'badge-secondary' : 'badge-warning';
    return classes;
  };
}
export default Counter;