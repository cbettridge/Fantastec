import React from 'react';
import {SafeAreaView} from 'react-native';

import model from '../model.json';
import Header from './components/header';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </>
  );
};

export default App;
