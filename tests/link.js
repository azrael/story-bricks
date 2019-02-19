import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../src/Link.jsx';

it('Link with href renders correctly', () => {
    const tree = renderer
        .create(<Link href='/foo'>test</Link>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Link without href renders correctly', () => {
    const tree = renderer
        .create(<Link>test</Link>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Link with blank renders correctly', () => {
    const tree = renderer
        .create(<Link href='/foo' blank>test</Link>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Link with blank but without href renders correctly', () => {
    const tree = renderer
        .create(<Link blank>test</Link>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
