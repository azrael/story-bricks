import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Heading, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Heading', () => <Story>
        <Title><Code>{'<Heading/>'}</Code></Title>

        <Description>
            Use it to add some caption in your story which is not as global as <Code>Title</Code>.
            For example, it can be used for heading sections of the story.
        </Description>

        <Example>
            <Heading>Props</Heading>
        </Example>
    </Story>);
