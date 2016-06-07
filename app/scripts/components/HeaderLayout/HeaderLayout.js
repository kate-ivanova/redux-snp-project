/* eslint no-unused-vars: "off" */
/* eslint babel/new-cap: "off" */
import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HeaderLayout.css';

const HeaderLayout = ({className, children}) => (
  <nav styleName="header-layout">
    <Link styleName="header-layout--link" activeClassName={styles.__active} to="/">Home</Link>
    <Link styleName="header-layout--link" activeClassName={styles.__active} to="contacts">Contacts</Link>
  </nav>
);

export default CSSModules(HeaderLayout, styles);
