import React from 'react';
import s from './story.css';

const Description = ({ children }) => <div className={s.description}>
    {children}
</div>;

Description.displayName = 'Description';

export default Description;
