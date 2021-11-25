import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Student.module.scss';

const Student = ({ student }) => {
  const [showMinusAndGrades, setShowMinusAndGrades] = useState(false);

  const gradeAdder = (sum, previousGrade) => {
    return parseInt(sum) + parseInt(previousGrade);
  };

  return (
    <div className={styles.Hr} key={student.id}>
      <div className={styles.Student} data-testid="Student">
        <div className={styles.ProfilePic}>
          <img src={student.pic} alt="" />
        </div>
        <div className={styles.StudentInfo}>
          <h1>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p data-testid="average">Average: {student.grades.reduce(gradeAdder) / student.grades.length}</p>
          {showMinusAndGrades ?
            <div data-testid="gradeList" className={styles.Grades}>
              {student.grades.map((e, i) => (
                <p key={i}>Test {i + 1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e}%</p>
              ))}
            </div>
            : null
          }
        </div>
        {showMinusAndGrades ?
          <button data-testid="buttonMinus" className={styles.ButtonMinus} onClick={() => { setShowMinusAndGrades(false); }} /> :
          <button data-testid="buttonPlus" className={styles.ButtonPlus} onClick={() => { setShowMinusAndGrades(true); }} />}
      </div>
    </div>
  );
};

Student.propTypes = {
  student: PropTypes.object,
};

export default Student;
