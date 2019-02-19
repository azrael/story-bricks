import React from 'react';
import renderer from 'react-test-renderer';
import Code from '../src/Code.jsx';
import Description from '../src/Description.jsx';
import Heading from '../src/Heading.jsx';
import Notice from '../src/Notice.jsx';
import Story from '../src/Story.jsx';
import Title from '../src/Title.jsx';

it('Code renders correctly', () => {
    const tree = renderer
        .create(<Code>test</Code>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Description renders correctly', () => {
    const tree = renderer
        .create(<Description>test</Description>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Heading renders correctly', () => {
    const tree = renderer
        .create(<Heading>test</Heading>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Notice renders correctly', () => {
    const tree = renderer
        .create(<Notice>test</Notice>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Story renders correctly', () => {
    const tree = renderer
        .create(<Story>test</Story>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});

it('Title renders correctly', () => {
    const tree = renderer
        .create(<Title>test</Title>)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
