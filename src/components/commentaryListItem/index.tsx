import React from 'react';
import {View} from 'react-native';

import Typography from '../typography';
import {ICommentary} from '../../types';
import styles from './styles';
import TimelineNode from '../timelineNode';

interface IProps {
  item: ICommentary;
  renderTimeline: boolean;
}
const CommentaryListItem = ({item, renderTimeline}: IProps) => {
  return (
    <View style={styles.container}>
      <TimelineNode minute={item.minute} renderTimeline={renderTimeline} />
      <Typography variant="body" style={styles.commentary}>
        {item.commentary}
      </Typography>
    </View>
  );
};

export default CommentaryListItem;
