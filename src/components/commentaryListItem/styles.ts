import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
  commentary: TextStyle;
}

export default StyleSheet.create<IStyles>({
  container: {
    flexDirection: 'row',
  },
  commentary: {
    paddingBottom: 30,
  },
});
