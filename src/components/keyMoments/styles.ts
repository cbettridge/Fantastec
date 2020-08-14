import {StyleSheet, ViewStyle} from 'react-native';

interface IStyles {
  container: ViewStyle;
}

export default StyleSheet.create<IStyles>({
  container: {
    padding: 20,
  },
});
