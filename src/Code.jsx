import React from 'react';
import s from './story.css';

const Code = ({ children }) => <code className={s.code}>
    {children}
</code>;

Code.displayName = 'Code';

export default Code;
