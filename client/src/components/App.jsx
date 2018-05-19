import React, { Component } from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import BestList from './BestList';
import Submit from './Submit';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <TopBar />
        <SearchBar />
        <BestList />
        <Submit />
      </div>
    );
  }
}

