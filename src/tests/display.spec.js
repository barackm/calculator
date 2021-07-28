import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Display Component', () => {
  it('Should match spanshot', () => {
    const tree = renderer.create(<Display result="10+10" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
