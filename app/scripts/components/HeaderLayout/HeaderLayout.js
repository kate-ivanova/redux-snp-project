import React from 'react';
import {Link} from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './HeaderLayout.css';
import classNames from 'classnames';

const HeaderLayout = ({className, children}) => (
  <div className={classNames(className, styles.layout)}>
    <nav>
      <Link className={styles.link} activeClassName={styles.__active} to="/">Home</Link>
      <Link className={styles.link} activeClassName={styles.__active} to="contacts">Contacts</Link>
    </nav>
  </div>
);

export default CSSModules(HeaderLayout, styles);
