import {StyleSheet, ViewStyle, Dimensions} from 'react-native';

interface IStyles {
  container: ViewStyle;
}

export default StyleSheet.create<IStyles>({
  container: {
    height: Dimensions.get('screen').height - 120,
  },
});
