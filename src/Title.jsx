import React from 'react';
import s from './story.css';

const Title = ({ children }) => <div className={s.title}>
    {children}
</div>;

Title.displayName = 'Title';

export default Title;
