import React, { Suspense } from 'react';
import * as ApiService from '../services/ApiService'
import games from '../mock/gamesMock.json'
import { customRender } from './utils/test-utils.js';
import App from '../App';

beforeEach(() => {
  ApiService.getGames = jest.fn()
    .mockImplementation(() => Promise.resolve(games))
})

test('Link changes the class when hovered', () => {
  const { container } = customRender(<App />);

  expect(container.querySelector('#App').nodeName).toBe('DIV')
  expect(ApiService.getGames).toHaveBeenCalledTimes(1)
});