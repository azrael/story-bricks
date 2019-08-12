import React from 'react';
import { storiesOf } from '@storybook/react';
import { Description, Example, Link, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Title', () => <Story>
        <Title>Title</Title>

        <Description>
            Component to represent the main title of a story
        </Description>

        <Example>
            <Title>Color Palette</Title>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Title.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
