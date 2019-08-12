import React from 'react';
import { storiesOf } from '@storybook/react';
import { Description, Example, Link, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Description', () => <Story>
        <Title>Description</Title>

        <Description>
            It can be used to describe what this component is and/or why this component exists
        </Description>

        <Example>
            <Description>
                Buttons allow users to take actions, and make choices, with a single tap.
            </Description>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Description.jsx' blank>
            View source code on GitHub
        </Link>
    </Story>);
