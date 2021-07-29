import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator Component', () => {
  beforeEach(() => {
    render(<Calculator />);
  });
  it('Should match spanshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should give the sum of two clicked numbers with the + button', async () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTitle('result')).toHaveTextContent('10');
  });
  it('should give the product of two clicked numbers with the x button', async () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTitle('result')).toHaveTextContent('25');
  });

  it('should give the percentage of the given number', async () => {
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('%'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTitle('result')).toHaveTextContent('0.5');
  });

  it('should give the difference of the two given number if the operator is -', async () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTitle('result')).toHaveTextContent('10');
  });

  it('should add two floating numbers if the operator is +', async () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    expect(screen.getByTitle('result')).toHaveTextContent('10.5');
  });

  it('should throw an error clicked on a button which does not exist', async () => {
    expect(() => screen.getByText('12')).toThrow();
  });

  it('should throw an error clicked on a button which does not exist', async () => {
    expect(() => screen.getByText('1.5')).toThrow();
  });

  it('should throw an error clicked on a button which does not exist', async () => {
    expect(() => screen.getByText('/')).toThrow();
  });

  it('should clear the display screen if cliked on the AC button', async () => {
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('AC'));
    expect(screen.getByTitle('result')).toHaveTextContent('0');
  });
});
