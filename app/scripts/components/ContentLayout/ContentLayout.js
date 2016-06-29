import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ContentLayout.css';
import classNames from 'classnames';

const ContentLayout = ({className, children}) => (
  <div className={classNames(className, styles.content)}>
    {children}
  </div>
);

export default CSSModules(ContentLayout, styles);
