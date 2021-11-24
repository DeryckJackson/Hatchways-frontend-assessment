import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StudentList from './StudentList';
import store from '../../store'
import { Provider } from 'react-redux';

describe('<StudentList />', () => {
  test('it should mount', () => {
    render(
      <Provider store={store}>
        <StudentList />
      </Provider>
    );

    const student = screen.getByTestId('StudentList');

    expect(student).toBeInTheDocument();
  });
});
