import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

describe('Button Component', () => {
  it('Should match spanshot', () => {
    const tree = renderer
      .create(<Button name="1" onClick={() => {}} color="white" wide />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
