import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../components/ButtonPanel';

describe('Button Panel Component', () => {
  it('Should match spanshot', () => {
    const tree = renderer
      .create(<ButtonPanel clickHandler={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
