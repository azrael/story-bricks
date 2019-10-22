import React from 'react';
import { storiesOf } from '@storybook/react';
import { Description, Example, Link, Notice, Story, Title } from '../dist';

storiesOf('Bricks', module)
    .add('Notice', () => <Story>
        <Title>Notice</Title>

        <Description>
            Can be used to render some minor message
        </Description>

        <Example>
            <Notice>Read more on our web site.</Notice>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Notice.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
