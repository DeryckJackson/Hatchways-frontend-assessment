import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';
import store from '../../store';
import { Provider } from 'react-redux';
import * as c from '../../actions/action-constants';

describe('<Search />', () => {
  it('should mount', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>);
    const search = screen.getByTestId('Search');

    expect(search).toBeInTheDocument();
  });

  it('should fire change event and display text value sent', () => {
    render(
      <Provider store={store}>
        <Search dispatchAction={c.SEARCH_STUDENTS} />
      </Provider>
    );

    const input = screen.getByRole('search');

    fireEvent.change(input, { target: { value: 'bob' } });

    expect(input.value).toEqual('bob');
  });
});
