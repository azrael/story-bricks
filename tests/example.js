import React from 'react';
import renderer from 'react-test-renderer';
import Example from '../src/Example.jsx';

it('Example with jsx renders correctly', () => {
    const tree = renderer
        .create(<Example><div>test</div></Example>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Example without jsx renders correctly', () => {
    const tree = renderer
        .create(<Example jsx={false}><div>test</div></Example>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Example with jsx as string renders correctly', () => {
    const tree = renderer
        .create(<Example jsx='foobar'><div>test</div></Example>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
