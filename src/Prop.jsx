import React from 'react';
import pt from 'prop-types';
import s from './story.css';
import p from './prop.css';

const Prop = ({ name, type, optional, defaultValue, children }) => <>
    <div className={p.type}>
        <span className={p.name}>
            {name}
        </span>

        {type && ': '}

        <span className={s.mono}>
            {optional && '?'}
            {type}
            {defaultValue !== void 0 && <> = {defaultValue}</>}
        </span>
    </div>

    {children && <div className={p.description}>
        {children}
    </div>}
</>;

Prop.displayName = 'Prop';

Prop.propTypes = {
    name: pt.string.isRequired,
    type: pt.string.isRequired,
    optional: pt.bool,
    defaultValue: pt.any
};

Prop.defaultProps = {
    optional: false
};

export default Prop;
