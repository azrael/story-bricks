import { addParameters, configure } from '@storybook/react';

addParameters({
    options: {
        theme: {
            brandImage: null,
            brandTitle: 'Story Bricks',
            brandUrl: 'https://github.com/azrael/story-bricks'
        }
    }
});

const req = require.context('../stories', false, /story\.js$/);

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
