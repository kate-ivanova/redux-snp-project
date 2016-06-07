import React from 'react';
import HeaderLayout from 'components/HeaderLayout';
import ContentLayout from 'components/ContentLayout';
import FooterLayout from 'components/FooterLayout';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';
import classNames from 'classnames';

const Layout = ({className, children}) => (
  <div className={classNames(className, styles.layout)}>
    <HeaderLayout />
    <ContentLayout styleName="layout--content">{children}</ContentLayout>
    <FooterLayout />
  </div>
);

export default CSSModules(Layout, styles);
