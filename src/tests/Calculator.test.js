import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let buttons
  beforeEach(() => {
    container = render(<Calculator/>)
    

  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add', () =>{
    fireEvent.click(container.getByTestId('number4'))
    fireEvent.click(container.getByTestId('operator-add'))
    fireEvent.click(container.getByTestId('number1'))
    fireEvent.click(container.getByTestId('operator-equals'))
    expect(container.getByTestId('running-total').textContent).toEqual('5')
  })

  it('should be able to subtract', () =>{
    fireEvent.click(container.getByTestId('number7'))
    fireEvent.click(container.getByTestId('operator-subtract'))
    fireEvent.click(container.getByTestId('number4'))
    fireEvent.click(container.getByTestId('operator-equals'))
    expect(container.getByTestId('running-total').textContent).toEqual('3')
  })

  it('should be able to multiply',() =>{
    fireEvent.click(container.getByTestId('number3'))
    fireEvent.click(container.getByTestId('operator-multiply'))
    fireEvent.click(container.getByTestId('number5'))
    fireEvent.click(container.getByTestId('operator-equals'))
    expect(container.getByTestId('running-total').textContent).toEqual('15')
  })

  it('should be able to divide',() =>{
    fireEvent.click(container.getByTestId('number2'))
    fireEvent.click(container.getByTestId('number1'))
    fireEvent.click(container.getByTestId('operator-divide'))
    fireEvent.click(container.getByTestId('number7'))
    fireEvent.click(container.getByTestId('operator-equals'))
    expect(container.getByTestId('running-total').textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number button clicks',() =>{
    fireEvent.click(container.getByTestId('number2'))
    fireEvent.click(container.getByTestId('number1'))
    fireEvent.click(container.getByTestId('number1'))
    expect(container.getByTestId('running-total').textContent).toEqual('211')
  })
  it('should be able to concatenate chain multiple operation together',() =>{
    fireEvent.click(container.getByTestId('number2'))
    fireEvent.click(container.getByTestId('number1'))
    fireEvent.click(container.getByTestId('operator-divide'))
    fireEvent.click(container.getByTestId('number7'))
    fireEvent.click(container.getByTestId('operator-add'))
    fireEvent.click(container.getByTestId('number5'))
    fireEvent.click(container.getByTestId('operator-multiply'))
    fireEvent.click(container.getByTestId('number2'))
    fireEvent.click(container.getByTestId('operator-equals'))
    expect(container.getByTestId('running-total').textContent).toEqual('16')
  })

  it('should be able to clear the running total without affecting the calculation',() =>{
    fireEvent.click(container.getByTestId('number2'))
    fireEvent.click(container.getByTestId('number1'))
    fireEvent.click(container.getByTestId('operator-divide'))
    fireEvent.click(container.getByTestId('number7'))
    fireEvent.click(container.getByTestId('operator-add'))
    fireEvent.click(container.getByTestId('number3'))
    fireEvent.click(container.getByTestId('clear'))
    fireEvent.click(container.getByTestId('number5'))
    fireEvent.click(container.getByTestId('operator-equals'))
    expect(container.getByTestId('running-total').textContent).toEqual('8')
  })

  //     calculator.add() - add 1 to 4 and get 5
// calculator.subtract() subtract 4 from 7 and get 3
// calculator.multiply() - multiply 3 by 5 and get 15
// calculator.divide() - divide 21 by 7 and get 3
// calculator.numberClick() - concatenate multiple number button clicks
// calculator.operatorClick() - chain multiple operations together
// calculator.clearClick() - clear the running total without affecting the calculation

})

