import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Student from './Student';

describe('<Student />', () => {
  it('should toggle display of test grades', () => {
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
    }

    render(<Student {...props} />);

    const student = screen.getByTestId('Student');

    expect(student).toBeInTheDocument();
  });
});
