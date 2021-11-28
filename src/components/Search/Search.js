import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Search.module.scss';

const Search = ({ dispatchAction, placeholder }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch({ type: dispatchAction, payload: e.target.value.toLowerCase() });
  };

  return (
    <div className={styles.Search} data-testid="Search">
      <input role="search" placeholder={placeholder} type="text" value={value} onChange={handleChange} />
    </div>
  );

};

export default Search;
