import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Story', () => <Story>
        <Title><Code>{'<Story/>'}</Code></Title>

        <Description>
            Container of a story that limits it width.
        </Description>

        <Example>
            <Story>Place your content here</Story>
        </Example>
    </Story>);
