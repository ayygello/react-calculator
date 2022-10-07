import React from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';
import { Textfit } from 'react-textfit';

const Dispay = ({ result }) => {
  const cn = bem('Display');

  return (
    <Textfit className={cn()} mode='single' max={70}>
      {result}
    </Textfit>
  );
};

Dispay.propTypes = {
  result: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default React.memo(Dispay);
