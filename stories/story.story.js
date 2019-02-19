import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Link, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Story', () => <Story>
        <Title><Code>{'<Story/>'}</Code></Title>

        <Description>
            Container of a story. It centers the story and limits its width.
        </Description>

        <Example>
            <Story>Place your content here</Story>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Story.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
