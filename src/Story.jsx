import React from 'react';
import s from './story.css';

const Story = ({ children }) => <div className={s.container}>
    {children}
</div>;

Story.displayName = 'Story';

export default Story;
