import React, { PureComponent } from 'react';
import pt from 'prop-types';
import classNames from 'classnames';
import JSX from './JSX.jsx';
import s from './prop.css';

class Example extends PureComponent {
    static propTypes = {
        jsx: pt.oneOfType([pt.string, pt.bool])
    };

    static defaultProps = {
        jsx: true
    };

    state = {
        tab: 'example'
    };

    handleSelectTab = tab => () => this.setState({ tab });

    render() {
        let { jsx, children } = this.props,
            { tab } = this.state;

        return <div className={s.example}>
            <div>
                <div
                    className={classNames(s.tab, {
                        [s.active]: tab === 'example'
                    })}
                    onClick={this.handleSelectTab('example')}
                >
                    Example
                </div>

                {jsx && <div
                    className={classNames(s.tab, {
                        [s.active]: tab === 'jsx'
                    })}
                    onClick={this.handleSelectTab('jsx')}
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
    }
}

export default Example;
