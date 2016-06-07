/* eslint no-unused-vars: "off" */
import React from 'react';
import HeaderLayout from 'components/HeaderLayout';
import ContentLayout from 'components/ContentLayout';
import FooterLayout from 'components/FooterLayout';
import './Layout.css';

const Layout = ({children}) => (
  <div className="layout">
    <HeaderLayout />
    <ContentLayout>{children}</ContentLayout>
    <FooterLayout />
  </div>
);

export default Layout;
