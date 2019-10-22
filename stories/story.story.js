import React from 'react';
import { storiesOf } from '@storybook/react';
import { Description, Example, Link, Story, Title } from '../dist';

storiesOf('Bricks', module)
    .add('Story', () => <Story>
        <Title>Story</Title>

        <Description>
            Container of a story
        </Description>

        <p>
            Container centers the story and limits its width.
        </p>

        <Example>
            <Story>Place your content here</Story>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Story.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
