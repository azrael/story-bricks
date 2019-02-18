import React from 'react';
import renderer from 'react-test-renderer';
import Prop from '../src/Prop.jsx';

it('Prop with required props only (name and type) renders correctly', () => {
    const tree = renderer
        .create(<Prop name='foo' type='bar'>test</Prop>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Prop with defaultValue renders correctly', () => {
    const tree = renderer
        .create(<Prop name='foo' type='bar' defaultValue='baz'>test</Prop>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Prop with optional renders correctly', () => {
    const tree = renderer
        .create(<Prop name='foo' type='bar' optional>test</Prop>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
