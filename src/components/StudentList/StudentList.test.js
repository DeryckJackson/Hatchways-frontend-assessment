import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StudentList from './StudentList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('<StudentList />', () => {
  let store;

  const mockStudentList = [
    {
      id: 1,
      pic: 'imgurl',
      firstName: 'foo',
      lastName: 'bar',
      email: 'fbar@email.com',
      company: 'Foobars R Us',
      skill: 'foobaring stuff together',
      grades: [42, 88, 77],
      tags: '"tag"'
    }
  ];

  it('should mount', () => {
    store = mockStore({
      studentReducer: {
        filteredStudentList: [],
      }
    });
    render(
      <Provider store={store}>
        <StudentList />
      </Provider>
    );

    const student = screen.getByTestId('emptyList');

    expect(student).toBeInTheDocument();
  });

  it('should render with prop student', () => {
    store = mockStore({
      studentReducer: {
        filteredStudentList: mockStudentList,
      }
    });

    render(
      <Provider store={store}>
        <StudentList />
      </Provider>
    );
    expect(screen.getByTestId('fullList')).toBeInTheDocument();
  });
});
