import {TextStyle, StyleSheet} from 'react-native';

import {colors} from '../../styles';

interface IStyles {
  h1: TextStyle;
  body: TextStyle;
}

const color = colors.text;

export default StyleSheet.create<IStyles>({
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color,
  },
  body: {
    fontSize: 16,
    color,
  },
});
