import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Student from './Student';

describe('<Student />', () => {
  it('should toggle display of test grades after click event', () => {
    const props = {
      student: {
        pic: 'imgurl',
        firstName: 'foo',
        lastName: 'bar',
        email: 'fbar@email.com',
        company: 'Foobars R Us',
        skill: 'foobaring stuff together',
        grades: [42, 88, 77]
      }
    };

    render(<Student {...props} />);

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
});
