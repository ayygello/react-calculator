import React, { useCallback } from 'react';
import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import './style.css';
import iconForKey from '../../utils/icon-for-key';

const KeyButton = ({ keyBtn, input }) => {
  const cn = bem('KeyButton');

  const callbacks = {
    click: useCallback(() => {
      input(keyBtn);
    }, [input, keyBtn]),
  };
  return (
    <button className={cn()} onClick={callbacks.click}>
      {iconForKey(keyBtn)}
    </button>
  );
};

KeyButton.propTypes = {
  keyBtn: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  input: PropTypes.func,
};

export default React.memo(KeyButton);
