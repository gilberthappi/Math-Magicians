// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote component testing', () => {
  it('Renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
