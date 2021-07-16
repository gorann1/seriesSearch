import React, { Component } from 'react';
import Nav from './Nav';
import SearchArea from './SearchArea';

class App extends Component {
  constructor() {
    super()
    this.state = {
      series: [],
      searchTerm: '',
    }
    this.apiKey = process.env.REACT_APP_API;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://imdb-api.com/en/API/SearchSeries/${this.apiKey}/${this.state.searchTerm}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ series: [...data.results]})
      })
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
