import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  list: ViewStyle;
}

export default StyleSheet.create<IStyles>({
  list: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 70,
  },
});
