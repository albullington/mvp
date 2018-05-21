import React, { Component } from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import BestList from './BestList';
import Form from './Form';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leadershipLevel: 'entry-level',
      interruption: true,
      numberOfGuests: 2,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log(`Your favorite flavor is: + ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <TopBar />
        <SearchBar />
        <BestList />
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          leadershipLevel={this.state.leadershipLevel}
          recommend={this.state.recommend}
          interruption={this.state.interruption}
          numberOfGuests={this.state.numberOfGuests}
        />
      </div>
    );
  }
}

