import React from 'react';
import s from './story.css';

const Notice = ({ children }) => <div className={s.notice}>
    {children}
</div>;

Notice.displayName = 'Notice';

export default Notice;
