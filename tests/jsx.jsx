import React from 'react';
import renderer from 'react-test-renderer';
import JSX from '../src/JSX.jsx';

it('JSX with single child renders correctly', () => {
    const tree = renderer
        .create(<JSX><div>test</div></JSX>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('JSX with multiple children renders correctly', () => {
    const tree = renderer
        .create(<JSX>
            <div>foo</div>
            bar
            <span>baz</span>
        </JSX>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('JSX with no children renders correctly', () => {
    const tree = renderer
        .create(<JSX />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
