import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkTo from '@storybook/addon-links/react';
import { Code, Description, Example, Link, Heading, Prop, Story, Title } from '../src';

storiesOf('Bricks', module)
    .add('Link', () => <Story>
        <Title><Code>{'<Link/>'}</Code></Title>

        <Description>
            It creates a link to any web resource.
        </Description>

        <Heading>Props</Heading>

        <Prop
            name='href'
            type='string'
            optional
        >
            URL to navigate. <br />
            Leave it blank to apply only styles. For example, if you want to combine it
            with the <Code>@storybook/addon-links</Code>.
        </Prop>

        <Example>
            <Link href='https://github.com/azrael/story-bricks'>
                View source code on GitHub
            </Link>
            <br/>
            <LinkTo kind='Bricks' story='Example'>
                <Link>
                    Go to Example
                </Link>
            </LinkTo>
        </Example>

        <Prop
            name='blank'
            type='boolean'
            optional
            defaultValue='false'
        >
            It indicates whether new page will be opened in a current or new tab.
            It works when the <Code>href</Code> is defined.
        </Prop>

        <Example>
            <Link href='https://github.com/azrael/story-bricks' blank>
                View source code on GitHub
            </Link>
        </Example>

        <Link href='https://github.com/azrael/story-bricks/blob/master/src/Link.jsx'>
            View source code on GitHub
        </Link>
    </Story>);
