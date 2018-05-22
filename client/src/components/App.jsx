import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import CompanyReviews from './CompanyReviews';
import Form from './Form';

class App extends Component {
  constructor() {
    super();

    this.state = {
      leadershipLevel: 'entry-level',
      recommend: true,
      interruption: true,
      view: 'home',
      data: {},
      query: 'Gutmann',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    event.preventDefault();
    this.saveFormData();
  }

  handleClick(event) {
    const { view } = this.state;
    event.preventDefault();
    if (view === 'home') {
      this.setState({
        view: 'review',
      });
    } else {
      this.setState({
        view: 'home',
      });
    }
  }

  saveFormData() {
    axios.post('http://localhost:4000/form', {
      data: {
        leadershipLevel: this.state.leadershipLevel,
        recommend: this.state.recommend,
        interruptions: this.state.interruption,
      },
    })
      .then((res) => {
        console.log('post response: ', res.data);
      })
      .catch((err) => {
        throw err;
      });
  }

  searchCompanies(query) {
    axios.get(`http://localhost:4000/search/${query}`)
      .then((res) => {
        this.setState({
          data: res,
        })
          .catch((err) => {
            throw err;
          });
      });
  }

  render() {
    const { view } = this.state;
    if (view === 'home') {
      return (
        <div>
          <NavBar handleClick={this.handleClick} />
          <CompanyReviews />
        </div>
      );
    }
    if (view === 'review') {
      return (
        <div>
          <NavBar handleClick={this.handleClick} />
          <Form
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            leadershipLevel={this.state.leadershipLevel}
            recommend={this.state.recommend}
            interruption={this.state.interruption}
          />
        </div>
      );
    }
  }
}

export default App;
