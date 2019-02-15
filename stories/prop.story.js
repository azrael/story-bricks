import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Heading, Prop, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Prop', () => <Story>
        <Title><Code>{'<Prop/>'}</Code></Title>

        <Description>
            Use it to describe the prop of a React-component.
        </Description>

        <Heading>Props</Heading>

        <Prop
            name='name'
            type='string'
        >
            The name of the prop. It is displayed in bold text.
        </Prop>

        <Example>
            <Prop name='value' type='string' />
        </Example>

        <Prop
            name='type'
            type='string'
        >
            The type of the prop. It is displayed in monospaced text right after the name. <br />
            It usually repeats <Code>propType</Code> of the prop. <br />
            You are free to use any string but most common use case is to use js/React related values such
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
            The default value of the prop (optional). It is displayed in monospaced text and separated
            from the type with <Code>=</Code> sign.
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
            Indicates whether prop is optional or not. If <Code>true</Code> than <Code>?</Code> sign
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
            Everything which is passed as a children are considered the description of a prop.
        </Prop>
    </Story>);
