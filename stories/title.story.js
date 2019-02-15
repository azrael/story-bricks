import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Title', () => <Story>
        <Title><Code>{'<Title/>'}</Code></Title>

        <Description>
            Component to represent the main title of a story.
        </Description>

        <Example>
            <Title>Color Palette</Title>
        </Example>
    </Story>);
