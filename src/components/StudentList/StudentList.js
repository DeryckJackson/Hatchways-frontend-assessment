import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './StudentList.module.scss';
import Student from '../Student/Student';


const StudentList = ({ filteredStudentList }) => {
  if (filteredStudentList.length === 0) {
    return (
      <div data-testid="emptyList" className={styles.StudentList}>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div data-testid="fullList" className={styles.StudentList}>
          {filteredStudentList.map(student => (
            <Student student={student} key={student.id} />
          ))}
        </div>
      </Fragment>
    );
  }
};

StudentList.propTypes = {
  filteredStudentList: PropTypes.array,
};

export const mapStateToProps = (state) => {
  return {
    filteredStudentList: state.studentReducer.filteredStudentList,
  };
};

export default connect(mapStateToProps)(StudentList);
