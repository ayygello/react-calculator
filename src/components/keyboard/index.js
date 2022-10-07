import React from 'react';
import KeyButton from '../key-button';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';

const Keyboard = ({ keyboard, input }) => {
  const cn = bem('Keyboard');

  return (
    <div className={cn()}>
      {keyboard.map((key, index) => (
        <KeyButton keyBtn={key} key={index} input={input} />
      ))}
    </div>
  );
};

Keyboard.propTypes = {
  keyboard: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ),
};

export default React.memo(Keyboard);
