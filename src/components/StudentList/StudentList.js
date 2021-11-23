import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/student-list-actions'
import PropTypes from 'prop-types';
import styles from './StudentList.module.css';

class StudentList extends Component {
  componentDidMount() {
    this.props.getStudents()
  }

  gradeReducer(sum, previousGrade) {
    return parseInt(sum) + parseInt(previousGrade);
  }

  render() {
    if (this.props.studentList.length === 0) {
      return (
        <div className={styles.Student} data-testid="StudentList">Loading...</div>
      )
    } else {
      return (
        <Fragment>
          {this.props.studentList.map(student => (
            <div className={styles.Student} data-testid="StudentList">
              <img src={student.pic} alt="" />
              <h1>{student.firstName} {student.lastName}</h1>
              <p>Email: {student.email}</p>
              <p>Company: {student.company}</p>
              <p>Skill: {student.skill}</p>
              <p>Average: {student.grades.reduce(this.gradeReducer) / student.grades.length}</p>
            </div>
          ))}
        </Fragment>
      )
    }
  }
}

StudentList.propTypes = {
  studentList: PropTypes.array,
  getStudents: PropTypes.func
};

export const mapStateToProps = (state: RootReducerState): MapStateToProps => {
  return {
    studentList: state.studentReducer.studentList
  };
};

export default connect(mapStateToProps, { getStudents })(StudentList);
