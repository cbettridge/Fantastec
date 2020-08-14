import React from 'react';
import {View} from 'react-native';

import Typography from '../typography';
import styles from './styles';

interface IProps {
  minute: string;
  renderTimeline: boolean;
}
const TimelineNode = ({minute, renderTimeline}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.minuteCircle}>
        <Typography variant="body" style={styles.minute}>
          {minute}
        </Typography>
      </View>
      {renderTimeline === true && <View style={styles.line} />}
    </View>
  );
};

export default TimelineNode;
