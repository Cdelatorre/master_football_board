import React from 'react';
import Form from '../components/Form';
import { customRender, fireEvent, cleanup } from './utils/test-utils';
import * as ApiService from '../services/ApiService'
import waitForExpect from 'wait-for-expect';

afterEach(() => {
  cleanup()
});

const fetchData = jest.fn()

const renderWithProps = () => {
  return customRender(
    <Form
      fetchData={fetchData}
    />
  )
}

describe('Renders form as expected', () => {
  test('Form component renders 4 inputs to get teams data and a submit button', () => {
    const { container } = renderWithProps();

    expect(container.querySelectorAll('.Form form .form-group input').length).toBe(4);
    expect(container.querySelectorAll('.Form form .form-group button').length).toBe(1);
  });
})

describe('Calls ApiService.saveGame in each case of submitting and manage error', () => {
  test('Form submitting must render error view if form has invalid output', async () => {
    ApiService.saveGame = jest.fn()
      .mockImplementation(() => Promise.reject({}))

    const { container } = renderWithProps();

    expect(container.querySelector('.Form form .form-group').classList.contains('invalid-form')).toBeFalsy();
    const submitButton = container.querySelector('.Form form .form-group button')
    fireEvent.click(submitButton)

    await waitForExpect(() => {
      expect(ApiService.saveGame).toHaveBeenCalledTimes(1)
    }, { timeout: 5000 });

    expect(container.querySelector('.Form form .form-group').classList.contains('invalid-form')).toBeTruthy();
  });


  test('Form submitting must call request with success when filled', async () => {
    ApiService.saveGame = jest.fn()
      .mockImplementation(() => Promise.resolve({}))

    const { container } = renderWithProps();
    const inputHome = container.querySelector('.Form form .form-group input#teamHome')
    const inputAway = container.querySelector('.Form form .form-group input#teamAway')
    const teamHomeScore = container.querySelector('.Form form .form-group input#teamHomeScore')
    const teamAwayScore = container.querySelector('.Form form .form-group input#teamAwayScore')

    fireEvent.input(inputHome, { target: { value: 'RealMadrid' } })
    fireEvent.input(inputAway, { target: { value: 'RealMadrid' } })
    fireEvent.input(teamHomeScore, { target: { value: 2 } })
    fireEvent.input(teamAwayScore, { target: { value: 3 } })

    const submitButton = container.querySelector('.Form form .form-group button')
    fireEvent.submit(submitButton)

    expect(container.querySelector('.Form form .form-group').classList.contains('invalid-form')).toBeFalsy();
  });
})
