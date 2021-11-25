import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.scss';
import { searchStudents } from '../../actions/student-list-actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.searchStudents(e.target.value.toLowerCase());
  }

  render() {
    return (
      <div className={styles.Search} data-testid="Search">
        <input role="search" placeholder="Search by name" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
};

export default connect(null, { searchStudents })(Search);
