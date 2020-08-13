import React from 'react';
import {FlatList} from 'react-native';

import CommentaryListItem from '../commentaryListItem';
import {ICommentary} from '../../types';
import styles from './styles';

interface IProps {
  commentary: ICommentary[];
}
const CommentaryList = ({commentary}: IProps) => {
  return (
    <FlatList
      style={styles.list}
      data={commentary}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return <CommentaryListItem item={item} />;
      }}
      initialNumToRender={commentary.length}
    />
  );
};

export default CommentaryList;
