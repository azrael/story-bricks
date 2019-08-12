import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Heading, Link, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Heading', () => <Story>
        <Title>Heading</Title>

        <Description>
            Use it to add a caption to your story which is not as global as the <Code>Title</Code>
        </Description>

        <p>
            For example, it can be used for headings of sections of the story.
        </p>

        <Example>
            <Heading>Props</Heading>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Heading.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
