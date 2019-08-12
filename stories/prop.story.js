import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Heading, Link, Prop, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Prop', () => <Story>
        <Title>Prop</Title>

        <Description>
            Use it to describe the prop of a React-component
        </Description>

        <Heading>Props</Heading>

        <Prop
            name='name'
            type='string'
        >
            The name of the prop. It is displayed in a bold text.
        </Prop>

        <Example>
            <Prop name='value' type='string' />
        </Example>

        <Prop
            name='type'
            type='string'
        >
            The type of the prop. It is displayed in a monospaced text right after the name. <br />
            It usually repeats the <Code>propType</Code> of the prop. <br />
            You can use any string but the most common use case is to use js/React related values, such
            as <Code>string</Code>, <Code>number</Code>, <Code>boolean</Code>, <Code>func</Code>, <Code>node</Code>, etc.
        </Prop>

        <Example>
            <Prop name='age' type='number' />
            <Prop name='placement' type="enum('top', 'right', 'bottom', 'left')" />
        </Example>

        <Prop
            name='defaultValue'
            type='string'
            optional
        >
            The default value of the prop (optional). It is displayed in a monospaced text and is separated
            from the type by the <Code>=</Code> sign.
        </Prop>

        <Example>
            <Prop name='value' type='string' defaultValue="'test'" />
            <Prop name='size' type="enum('l', 'm', 's')" defaultValue="'m'" />
        </Example>

        <Prop
            name='optional'
            type='boolean'
            defaultValue='false'
            optional
        >
            It indicates whether prop is required or not. If <Code>true</Code> than <Code>?</Code> sign
            is displayed before the type.
        </Prop>

        <Example>
            <Prop name='disabled' type='boolean' defaultValue='false' optional />
        </Example>

        <Prop
            name='children'
            type='node'
            optional
        >
            Everything passed as a children is considered the description of a prop.
        </Prop>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Prop.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
