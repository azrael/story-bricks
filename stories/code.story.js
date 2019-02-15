import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Code', () => <Story>
        <Title><Code>{'<Code/>'}</Code></Title>

        <Description>
            Inline pre-formatted block of text.
        </Description>

        <Example>
            <Code>const a = 1</Code>
        </Example>
    </Story>);
