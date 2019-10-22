import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Link, Story, Title } from '../dist';

storiesOf('Bricks', module)
    .add('Code', () => <Story>
        <Title>Code</Title>

        <Description>
            Inline pre-formatted block of text
        </Description>

        <Example>
            <Code>const a = 1</Code>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Code.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
