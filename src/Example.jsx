import React, { useState } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import JSX from './JSX.jsx';
import s from './prop.css';

const Example = ({ jsx, children }) => {
    const [tab, setTab] = useState('example');

    return <div className={s.example}>
        <div>
            <div
                className={classNames(s.tab, {
                    [s.active]: tab === 'example'
                })}
                onClick={() => setTab('example')}
            >
                Example
            </div>

            {jsx && <div
                className={classNames(s.tab, {
                    [s.active]: tab === 'jsx'
                })}
                onClick={() => setTab('jsx')}
            >
                JSX
            </div>}
        </div>

        {tab === 'example' && children}

        {jsx && tab === 'jsx' && <div className={s.jsx}>
            <JSX>
                {jsx === true ? children : jsx}
            </JSX>
        </div>}
    </div>;
};

Example.displayName = 'Example';

Example.propTypes = {
    jsx: pt.oneOfType([pt.string, pt.bool])
};

Example.defaultProps = {
    jsx: true
};

export default Example;
