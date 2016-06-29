import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './FooterLayout.css';
import classNames from 'classnames';

const FooterLayout = ({className, children}) => (
  <div className={classNames(className, styles.layout)}>
    redux-snp-app (2016)
  </div>
);

export default CSSModules(FooterLayout, styles);
