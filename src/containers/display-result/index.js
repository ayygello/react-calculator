import React from 'react';
import Dispay from '../../components/display';
import useSelector from '../../hooks/use-selector';

const DisplayResult = () => {
  const select = useSelector((state) => ({
    result: state.calculator.result,
  }));

  return <Dispay result={select.result} />;
};

export default React.memo(DisplayResult);
