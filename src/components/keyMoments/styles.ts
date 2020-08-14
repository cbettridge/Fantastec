import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

import {colors, minuteCircleSize, shadow} from '../../styles';

interface IStyles {
  container: ViewStyle;
  collapsable: ViewStyle;
  keyMomentItem: ViewStyle;
  minuteCircle: ViewStyle;
  minute: TextStyle;
  keyMomentText: TextStyle;
}

export default StyleSheet.create<IStyles>({
  container: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
  },
  collapsable: {
    paddingTop: 10,
    alignItems: 'center',
  },
  keyMomentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginVertical: 2,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.accentGreen,
    backgroundColor: colors.white,
    ...shadow,
    width: 200,
  },
  minuteCircle: {
    width: minuteCircleSize,
    height: minuteCircleSize,
    borderRadius: minuteCircleSize / 2,
    backgroundColor: colors.accentGreen,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  minute: {
    color: colors.white,
    fontWeight: 'bold',
  },
  keyMomentText: {
    color: colors.accentGreen,
  },
});
