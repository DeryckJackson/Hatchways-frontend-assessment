import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getStudents } from '../../actions/student-list-actions'
import PropTypes from 'prop-types';
import styles from './StudentList.module.css';

class StudentList extends Component {
  componentDidMount() {
    this.props.getStudents()
  }

  gradeAdder(sum, previousGrade) {
    return parseInt(sum) + parseInt(previousGrade);
  }

  render() {
    if (this.props.filteredStudentList.length === 0) {
      return (
        <div className={styles.StudentList} data-testid="StudentList">
        </div>
      )
    } else {
      return (
        <Fragment>
          {this.props.filteredStudentList.map(student => (
            <div className={styles.Hr} key={student.id}>
              <div className={styles.StudentList} data-testid="StudentList">
                <div className={styles.ProfilePic}>
                  <img src={student.pic} alt="" />
                </div>
                <div className={styles.StudentInfo}>
                  <h1>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: {student.grades.reduce(this.gradeAdder) / student.grades.length}</p>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      )
    }
  }
}

StudentList.propTypes = {
  filteredStudentList: PropTypes.array,
  getStudents: PropTypes.func
};

export const mapStateToProps = (state) => {
  return {
    filteredStudentList: state.studentReducer.filteredStudentList,
  };
};

export default connect(mapStateToProps, { getStudents })(StudentList);
