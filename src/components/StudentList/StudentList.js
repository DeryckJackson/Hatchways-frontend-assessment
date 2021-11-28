import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './StudentList.module.scss';
import Student from '../Student/Student';


class StudentList extends Component {

  render() {
    if (this.props.filteredStudentList.length === 0) {
      return (
        <div className={styles.StudentList} data-testid="StudentList">
        </div>
      );
    } else {
      return (
        <Fragment>
          <div className={styles.StudentList}>
            {this.props.filteredStudentList.map(student => (
              <Student student={student} key={student.id} />
            ))}
          </div>
        </Fragment>
      );
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

export default connect(mapStateToProps)(StudentList);
