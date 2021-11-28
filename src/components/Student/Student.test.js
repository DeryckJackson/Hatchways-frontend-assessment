import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Student from './Student';
import { Provider, useDispatch } from 'react-redux';
import store from '../../store';
import * as c from '../../actions/action-constants';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('<Student />', () => {
  let props;

  beforeEach(() => {
    props = {
      student: {
        pic: 'imgurl',
        firstName: 'foo',
        lastName: 'bar',
        email: 'fbar@email.com',
        company: 'Foobars R Us',
        skill: 'foobaring stuff together',
        grades: [42, 88, 77],
        tags: '"tag"'
      }
    };
  });
  it('should toggle display of test grades after click event', () => {
    render(
      <Provider store={store}>
        <Student {...props} />
      </Provider>);

    const buttonPlus = screen.getByTestId('buttonPlus');

    expect(screen.queryByTestId('gradeList')).toBeFalsy();
    expect(buttonPlus).toBeInTheDocument();

    fireEvent.click(buttonPlus);

    expect(screen.queryByTestId('buttonPlus')).toBeFalsy();
    expect(screen.getByTestId('average')).toHaveTextContent('69');

    const gradeList = screen.getByTestId('gradeList');

    expect(gradeList).toHaveTextContent('42');
    expect(gradeList).toHaveTextContent('88');
    expect(gradeList).toHaveTextContent('77');
    expect(screen.getByTestId('buttonMinus')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('buttonMinus'));

    expect(screen.queryByTestId('gradeList')).toBeFalsy();
    expect(screen.queryByTestId('buttonMinus')).toBeFalsy();
  });

  it('should handleSubmit event and add tag to student', () => {
    render(
      <Provider store={store}>
        <Student {...props} />
      </Provider>);

    const tag = 'tag';
    const { student } = props;
    const expectedPayload = {
      type: c.ADD_TAG,
      payload: {
        student,
        tag
      }
    };

    const tagInput = screen.getByTestId('tagInput');
    fireEvent.change(tagInput, { target: { value: tag } });

    expect(tagInput.value).toEqual(tag);

    fireEvent.submit(screen.getByTestId('tagForm'));

    mockDispatch.mockReturnValue('foo');

    expect(mockDispatch).toHaveBeenCalledWith(expectedPayload);
  });
});
