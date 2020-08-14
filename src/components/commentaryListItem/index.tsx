import React from 'react';
import {View} from 'react-native';

import Typography from '../typography';
import {ICommentary} from '../../types';
import styles from './styles';
import TimelineNode from '../timelineNode';

interface IProps {
  item: ICommentary;
  renderTimeline: boolean;
  isHighlighted: boolean;
}
const CommentaryListItem = ({item, renderTimeline, isHighlighted}: IProps) => {
  const commentaryVariant = isHighlighted === true ? 'bodyBold' : 'body';
  return (
    <View style={styles.container}>
      <TimelineNode minute={item.minute} renderTimeline={renderTimeline} />
      <Typography variant={commentaryVariant} style={styles.commentary}>
        {item.commentary}
      </Typography>
    </View>
  );
};

export default CommentaryListItem;
