import React from 'react';
import TableGames from '../components/TableGames';
import games from '../mock/gamesMock.json'
import { customRender, fireEvent } from './utils/test-utils';

describe('Renders as expected depending on props value', () => {
  test('TableGame component renders Spinner when loading prop is set tu true', () => {
    const { container } = customRender(<TableGames loading />);

    expect(container.querySelectorAll('.TableGames .table-content table tbody tr').length).toBe(0);
    expect(container.querySelector('.TableGames .table-content .Spinner').nodeName).toBe('DIV');
  });

  test('TableGame component render expected number of games passed as prop', () => {
    const { container } = customRender(<TableGames games={games} loading={false} />);

    expect(container.querySelectorAll('.TableGames .table-content table tbody tr').length).toBe(games.length);
  });
})

test('Delete button execute a call to deleteGame call', async () => {
  const onDeleteMock = jest.fn()
  const { container } = customRender(<TableGames games={games} onDelete={onDeleteMock} loading={false} />);

  const deleteButton = container.querySelector('.TableGames .table-content table tbody tr td .deleteButton')
  fireEvent.click(deleteButton)

  expect(onDeleteMock).toHaveBeenCalledTimes(1)
});