import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge, Button } from './mui';
import { Description, Example, Heading, Prop, Story, Title } from '../src';

const InboxButton = () => <Button variant='outlined' color='primary'>Inbox</Button>;
const Space = () => <span style={{ marginRight: '16px' }} />;

storiesOf('Material UI example', module)
    .add('Badge', () => <Story>
        <Title>Badge</Title>

        <Description>
            Badge generates a small badge to the top-right of its child(ren)
        </Description>

        <Heading>Props</Heading>

        <Prop
            name='badgeContent'
            type='node'
            optional
        >
            The content rendered within the badge.
        </Prop>

        <Example>
            <Badge badgeContent={7} color='secondary'>
                <InboxButton />
            </Badge>
        </Example>

        <Prop
            name='max'
            type='number'
            defaultValue={99}
            optional
        >
            Max count to show.
        </Prop>

        <Example>
            <Badge badgeContent={7} color='secondary' max={200}>
                <InboxButton />
            </Badge>

            <Space />

            <Badge badgeContent={1000} color='secondary' max={200}>
                <InboxButton />
            </Badge>
        </Example>
    </Story>);
