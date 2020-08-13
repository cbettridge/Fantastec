import React from 'react';
import {View} from 'react-native';

import Typography from '../typography';
import {ICommentary} from '../../types';
import styles from './styles';

interface IProps {
  item: ICommentary;
}
const CommentaryListItem = ({item}: IProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Typography variant="body">{item.minute}</Typography>
      </View>
      <Typography variant="body">{item.commentary}</Typography>
    </View>
  );
};

export default CommentaryListItem;
