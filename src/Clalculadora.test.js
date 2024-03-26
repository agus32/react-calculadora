import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Calculadora } from './Calculadora';

test('suma de 5 y 3 es igual a 8', () => {
  render(<Calculadora />);

  const input1Element = screen.getByTestId('input-1');
  const input2Element = screen.getByTestId('input-2');
  const sumButton = screen.getByTestId('boton-sumar');

  fireEvent.change(input1Element, { target: { value: '5' } });
  fireEvent.change(input2Element, { target: { value: '3' } });

  fireEvent.click(sumButton);


  const resultElement = screen.getByTestId('resultado');


  expect(resultElement.textContent).toBe('8');
});