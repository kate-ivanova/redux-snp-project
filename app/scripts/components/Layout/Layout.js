import React from 'react';
import HeaderLayout from 'components/HeaderLayout';
import ContentLayout from 'components/ContentLayout';
import FooterLayout from 'components/FooterLayout';
import CSSModules from 'react-css-modules';
import styles from './Layout.css';

const Layout = ({children}) => (
  <div className={styles.layout}>
    <HeaderLayout />
    <ContentLayout className={styles.content}>{children}</ContentLayout>
    <FooterLayout />
  </div>
);

export default CSSModules(Layout, styles);
