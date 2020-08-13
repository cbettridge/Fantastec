import React from 'react';
import {View} from 'react-native';

import Typography from '../typography';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Typography variant="h1" style={styles.heading}>
        Live Commentary
      </Typography>
    </View>
  );
};

export default Header;
