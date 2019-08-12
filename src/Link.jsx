import React from 'react';
import pt from 'prop-types';
import s from './story.css';

const Link = ({ href, blank, children }) => {
    if (!href) {
        return <span className={s.link}>
            {children}
        </span>;
    }

    return <a
        className={s.link}
        href={href}
        target={blank ? '_blank' : '_self'}
        rel='noreferrer noopener'
    >
        {children}
    </a>;
};

Link.displayName = 'Link';

Link.propTypes = {
    href: pt.string,
    blank: pt.bool
};

Link.defaultProps = {
    blank: false
};

export default Link;
