import React from 'react';
import { storiesOf } from '@storybook/react';
import {Code, Description, Example, Heading, Link, Prop, Story, Title} from '../src';

storiesOf('Bricks', module)
    .add('Example', () => <Story>
        <Title><Code>{'<Example/>'}</Code></Title>

        <Description>
            A playground on which the described component can be placed so user can try it. Also, Example can be used to
            demonstrate various effects of various prop values.
        </Description>

        <Heading>Props</Heading>

        <Prop
            name='jsx'
            type='boolean | string'
            defaultValue='true'
            optional
        >
            Since the example consists of rendered component and it&apos;s formatted and highlighted JSX-code,
            this prop controls the content of the JSX-code. <br />
            If it is <Code>false</Code>, no JSX will be showed. If <Code>true</Code>, JSX will be calculated
            automatically based on example&apos;s children. If you pass a string, it will be used directly as JSX.
        </Prop>

        <Example>
            <Example>
                <b>JSX is calculated automatically</b>
            </Example>

            <Example jsx={false}>
                <b>No JSX</b>
            </Example>

            <Example jsx='<i>Test</i>'>
                <b>Using a string as JSX</b>
            </Example>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Example.jsx'>
            View source code on GitHub
        </Link>
    </Story>);
