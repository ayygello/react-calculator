import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const iconForKey = (value) => {
  if (value === 'C') {
    value = <FontAwesomeIcon icon={solid('c')} />;
    return value;
  } else if (value === 'plus-minus') {
    value = <FontAwesomeIcon icon={solid('plus-minus')} />;
    return value;
  } else if (value === '%') {
    value = <FontAwesomeIcon icon={solid('percent')} />;
    return value;
  } else if (value === '/') {
    value = <FontAwesomeIcon icon={solid('divide')} />;
    return value;
  } else if (value === '*') {
    value = <FontAwesomeIcon icon={solid('xmark')} />;
    return value;
  } else if (value === '-') {
    value = <FontAwesomeIcon icon={solid('minus')} />;
    return value;
  } else if (value === '+') {
    value = <FontAwesomeIcon icon={solid('plus')} />;
    return value;
  } else if (value === '=') {
    value = <FontAwesomeIcon icon={solid('equals')} />;
    return value;
  } else if (value === 'backspace') {
    value = <FontAwesomeIcon icon={solid('delete-left')} />;
    return value;
  }
  return value;
};

export default iconForKey;
