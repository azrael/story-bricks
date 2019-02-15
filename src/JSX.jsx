import React, { Children } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import xonokai from 'react-syntax-highlighter/dist/cjs/styles/prism/xonokai';
import reactElementToJSXString from 'react-element-to-jsx-string';

SyntaxHighlighter.registerLanguage('jsx', jsx);

const options = {
    showDefaultProps: false,
    tabStop: 4
};

const JSX = ({ children }) => <SyntaxHighlighter language='jsx' style={xonokai}>
    {Children
        .toArray(children)
        .map(child => typeof child === 'string' ? child : reactElementToJSXString(child, options))
        .join('\n')
    }
</SyntaxHighlighter>;

JSX.displayName = 'JSX';

export default JSX;
