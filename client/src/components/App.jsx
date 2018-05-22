import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import CompanyReviews from './CompanyReviews';
import Form from './Form';
import SearchBar from './SearchBar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      leadershipLevel: 'entry-level',
      recommend: true,
      interruption: true,
      view: 'home',
      companies: ['Google', 'Slack', 'Pinterest'],
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.searchCompanies(this.state.query);
  }

  onChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  onKeyDown(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

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
    axios.get(`http://localhost:4000/${query}`)
      .then((res) => {
        const recommendedCompanies = [];
        res.data.forEach((company) => {
          if (company.recommend === true && company.company) {
            recommendedCompanies.push(company.company);
          }
        });
        this.setState({ companies: recommendedCompanies });
      }).catch((err) => {
        throw err;
      });
  }

  render() {
    const {
      view,
      leadershipLevel,
      recommend,
      interruption,
      query,
      companies,
    } = this.state;

    if (view === 'home') {
      return (
        <div>
          <NavBar handleClick={this.handleClick} />
          <SearchBar
            query={query}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
          />
          <CompanyReviews companies={companies} />
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
            leadershipLevel={leadershipLevel}
            recommend={recommend}
            interruption={interruption}
          />
        </div>
      );
    }
  }
}

export default App;
