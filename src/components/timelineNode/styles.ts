import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {colors, shadow, minuteCircleSize} from '../../styles';

interface IStyles {
  container: ViewStyle;
  minuteCircle: ViewStyle;
  minute: TextStyle;
  line: ViewStyle;
}

export default StyleSheet.create<IStyles>({
  container: {
    marginRight: 20,
    alignItems: 'center',
  },
  minuteCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accentGreen,
    width: minuteCircleSize,
    height: minuteCircleSize,
    borderRadius: minuteCircleSize / 2,
    ...shadow,
  },
  minute: {
    color: colors.white,
    fontWeight: 'bold',
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});
