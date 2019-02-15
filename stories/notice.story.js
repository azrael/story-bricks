import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Notice, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Notice', () => <Story>
        <Title><Code>{'<Notice/>'}</Code></Title>

        <Description>
            Can be used for rendering some minor message.
        </Description>

        <Example>
            <Notice>Read more on our web site.</Notice>
        </Example>
    </Story>);
