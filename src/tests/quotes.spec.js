import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quotes';

describe('Quotes Component', () => {
  it('Should match spanshot', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
