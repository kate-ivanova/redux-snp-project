/* eslint no-unused-vars: "off" */
/* eslint babel/new-cap: "off" */
import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HeaderLayout.css';
import classNames from 'classnames';

const HeaderLayout = ({className, children}) => (
  <div className={classNames(className, styles['header-layout'])}>
    <nav>
      <Link styleName="header-layout--link" activeClassName={styles.__active} to="/">Home</Link>
      <Link styleName="header-layout--link" activeClassName={styles.__active} to="contacts">Contacts</Link>
    </nav>
  </div>
);

export default CSSModules(HeaderLayout, styles);
