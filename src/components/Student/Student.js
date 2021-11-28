import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Student.module.scss';
import { useDispatch } from 'react-redux';
import * as c from '../../actions/action-constants';

const Student = ({ student }) => {
  const [showMinusAndGrades, setShowMinusAndGrades] = useState(false);
  const [tagValue, setTagValue] = useState('');
  const [tagArray, setTagArray] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    setTagArray(student.tags.match(/[^"]*[a-zA-Z0-9][^"]*/g));
  }, [student.tags]);

  const handleChange = (e) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: c.ADD_TAG, payload: {
        student,
        tag: tagValue
      }
    });
    setTagValue('');
  };

  const gradeAdder = (sum, previousGrade) => {
    return parseInt(sum) + parseInt(previousGrade);
  };

  return (
    <div className={styles.Hr}>
      <div className={styles.Student} data-testid="Student">
        <div className={styles.ProfilePic}>
          <img src={student.pic} alt="" />
        </div>
        <div className={styles.StudentInfo}>
          <h1>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p data-testid="average">Average: {student.grades.reduce(gradeAdder) / student.grades.length}%</p>
          {showMinusAndGrades ?
            <div data-testid="gradeList" className={styles.Grades}>
              {student.grades.map((e, i) => (
                <p key={i}>Test {i + 1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{e}%</p>
              ))}
            </div>
            : null
          }
          {tagArray ?
            <div className={styles.Tags}>
              {tagArray.map((tag, i) => (
                <div key={i}>{tag}</div>
              ))
              }
            </div> : null
          }
          <form onSubmit={handleSubmit}>
            <input className={styles.Input} type="text" value={tagValue} onChange={handleChange} placeholder="Add a tag" />
          </form>
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
