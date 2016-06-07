/* eslint no-unused-vars: "off" */
/* eslint babel/new-cap: "off" */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './FooterLayout.css';

const FooterLayout = ({className, children}) => (
  <div styleName="footer-layout">
    redux-snp-app (2016)
  </div>
);

export default CSSModules(FooterLayout, styles);
