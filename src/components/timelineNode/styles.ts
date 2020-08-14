import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {colors, shadow} from '../../styles';

const circleSize = 30;

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
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
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
