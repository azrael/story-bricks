import React from 'react';
import s from './story.css';

const Heading = ({ children }) => <div className={s.heading}>
    {children}
</div>;

Heading.displayName = 'Heading';

export default Heading;
