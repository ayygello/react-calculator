import React, { useCallback } from 'react';
import Keyboard from '../../components/keyboard';
import useSelector from '../../hooks/use-selector';
import useStore from '../../hooks/use-store';

const DisplayKeyboard = () => {
  const store = useStore();

  const select = useSelector((state) => ({
    keyboard: state.calculator.keyboard,
  }));

  const callbacks = {
    input: useCallback((key) => store.get('calculator').input(key), []),
  };

  return <Keyboard keyboard={select.keyboard} input={callbacks.input} />;
};

export default React.memo(DisplayKeyboard);
