import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  list: ViewStyle;
}

export default StyleSheet.create<IStyles>({
  list: {
    padding: 20,
  },
});
