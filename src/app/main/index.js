import React from 'react';
import Layout from '../../components/layout';
import DisplayKeyboard from '../../containers/display-keyboard';
import DisplayResult from '../../containers/display-result';

const Main = () => {
  return (
    <Layout>
      <DisplayResult />
      <DisplayKeyboard />
    </Layout>
  );
};

export default React.memo(Main);
