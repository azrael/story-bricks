import React from 'react';
import { storiesOf } from '@storybook/react';
import { Code, Description, Example, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Description', () => <Story>
        <Title><Code>{'<Description/>'}</Code></Title>

        <Description>
            Can be used to describe what this component is and/or a purpose this component exists for.
        </Description>

        <Example>
            <Description>
                Buttons allow users to take actions, and make choices, with a single tap.
            </Description>
        </Example>
    </Story>);
