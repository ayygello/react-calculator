import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';

const Layout = ({ children }) => {
  const cn = bem('Layout');

  return <div className={cn()}>{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {};

export default React.memo(Layout);
