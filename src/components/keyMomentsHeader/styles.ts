import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  header: ViewStyle;
}

export default StyleSheet.create<IStyles>({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
