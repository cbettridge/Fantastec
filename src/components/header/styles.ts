import {ViewStyle, TextStyle, StyleSheet} from 'react-native';

interface IStyles {
  container: ViewStyle;
  heading: TextStyle;
}

export default StyleSheet.create<IStyles>({
  container: {
    paddingVertical: 10,
    height: 50,
  } as ViewStyle,
  heading: {
    textAlign: 'center',
  } as TextStyle,
});
