import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';

addDecorator(
    withOptions({
        name: 'Story Bricks',
        url: 'https://github.com/azrael/story-bricks'
    })
);

const req = require.context('../stories', false, /story\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
