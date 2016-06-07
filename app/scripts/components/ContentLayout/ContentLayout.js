/* eslint no-unused-vars: "off" */
/* eslint babel/new-cap: "off" */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContentLayout.css';

const ContentLayout = ({children}) => (
  <div styleName="content-layout">
    {children}
  </div>
);

export default CSSModules(ContentLayout, styles);
