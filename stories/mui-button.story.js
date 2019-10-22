import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './mui';
import { Code, Description, Example, Heading, Prop, Story, Title } from '../dist';

const Space = () => <span style={{ marginRight: '16px' }} />;

const exampleOnClick = `<Button onClick={handleClick}>
    Primary
</Button>`;

storiesOf('Material UI example', module)
    .add('Button', () => <Story>
        <Title>Button</Title>

        <Description>
            Buttons allow users to take actions, and make choices, with a single tap
        </Description>

        <Heading>Props</Heading>

        <Prop
            name='color'
            type="enum('default', 'inherit', 'primary', 'secondary')"
            defaultValue="'default'"
            optional
        >
            The color of the component. It supports those theme colors that make sense for this component.
        </Prop>

        <Example>
            <Button variant='contained' color='primary'>
                Primary
            </Button>

            <Space />

            <Button variant='contained' color='secondary'>
                Secondary
            </Button>
        </Example>

        <Prop
            name='disabled'
            type='boolean'
            defaultValue='false'
            optional
        >
            If <Code>true</Code>, the button will be disabled.
        </Prop>

        <Example>
            <Button variant='contained' color='primary' disabled={false}>
                Primary
            </Button>

            <Space />

            <Button variant='contained' color='primary' disabled>
                Primary
            </Button>
        </Example>

        <Prop
            name='onClick'
            type='func'
            optional
        >
            Callback fired when the component is clicked with a mouse or pressed with a tap.
        </Prop>

        <Example jsx={exampleOnClick}>
            <Button variant='contained' color='primary' onClick={action('button click')}>
                Primary
            </Button>
        </Example>
    </Story>);
