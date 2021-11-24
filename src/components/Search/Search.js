import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <div className={styles.Search} data-testid="Search">
        <input placeholder="Search by name" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
};

export default Search;
