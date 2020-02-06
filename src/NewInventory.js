import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class NewInventory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], unit:[], text: '' };
    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleUnitChange = this.handleUnitChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>New Inventory</h3>
        <AddNewInventory items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-item"
            onChange={this.handleItemChange}
            value={this.state.text}
          />
          <select value={this.state.value} onChange={this.handleUnitChange}>
            <option value="lbs">Lbs</option>
            <option value="Oz">Oz</option>
            <option value="Each">Each</option>
          </select>
          <button>
            Add Item #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  
  handleItemChange(e) {
    this.setState({ text: e.target.value });
  }
  
  handleUnitChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class AddNewInventory extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}


export default NewInventory;