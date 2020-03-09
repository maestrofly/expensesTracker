import './App.css';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: [
        {
          item: 'Ice cream',
          itemDescription: 'Yoghurt',
          currency: '20', 
          
        }
      ],
      item: '',
      itemDescription: '',
      currency: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      item: this.state.item,
      itemDescription: this.state.itemDescription,
      currency: this.state.currency
    };
    this.setState({
      stuff: [...this.state.stuff, newItem],
      item: '',
      itemDescription: '',
      currency: ''
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    const stuff = this.state.stuff.map((item, index) => {
      if (item.currency !== '' && item.currency > 0 && item.item !== '') {
        return (
          <div className="output" key={index}>
            <div className="stuff-content">
              <div>
                <h4 className="item">{item.item}</h4>
              </div>

              <div className="item-details">
                <small className="time">{item.time}</small>
                <small className="date">{item.date}</small>
              </div>
            </div>
            <h5>
              {' '}
              <span>&#8373;</span> {item.currency}
            </h5>

            <p className="discription">{item.itemDescription}</p>
          </div>
        );
      } else {
        return null;
      }
    });

    return (
      <div>
        <h1 className="App-header">Expenses Tracker</h1>
        <div className="container">
          <div className="form-container">
            <div className="header">
              <h2>Add New Item</h2>
            </div>
            <form onSubmit={this.handleSubmit} className="form">
              <div className="form-row">
                <label>Item:</label>
                <input
                  type="text"
                  name="item"
                  value={this.state.item}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-row">
                <label>Item Description:</label>
                <textarea
                  name="itemDescription"
                  onChange={this.handleChange}
                  value={this.state.itemDescription}
                />
              </div>

              <div className="form-row">
                <label>Amount spent:</label>
                <span className="GHS">
                  <input
                    type="number"
                    name="currency"
                    value={this.state.currency}
                    onChange={this.handleChange}
                  />
                </span>
              </div>

              <div>
                <button className="btn" type="submit">
                  Add Item
                </button>
              </div>
            </form>
          </div>
          <div className="output-container">
            <div className="output-stuff">{stuff}</div>
          </div>
        </div>
      </div>
    );
  }
}