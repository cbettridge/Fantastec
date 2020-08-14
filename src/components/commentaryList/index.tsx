import React, {useEffect, useRef} from 'react';
import {FlatList} from 'react-native';

import CommentaryListItem from '../commentaryListItem';
import {ICommentary} from '../../types';
import styles from './styles';

interface IProps {
  commentary: ICommentary[];
  highlightedItemId?: string;
}
const CommentaryList = ({commentary, highlightedItemId}: IProps) => {
  const listRef = useRef(null);

  useEffect(() => {
    const itemIndex = commentary.findIndex(
      item => item.id === highlightedItemId,
    );
    if (listRef.current !== null && itemIndex !== -1) {
      listRef.current.scrollToIndex({index: itemIndex});
    }
  }, [highlightedItemId]);

  return (
    <FlatList
      ref={listRef}
      contentContainerStyle={styles.list}
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
