import React from 'react';
import {SafeAreaView} from 'react-native';

import model from '../model.json';
import Header from './components/header';
import Commentary from './components/commentary';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Header />
        <Commentary commentary={model} />
      </SafeAreaView>
    </>
  );
};

export default App;
