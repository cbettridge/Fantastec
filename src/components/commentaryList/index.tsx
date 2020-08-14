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

  /* 
  Using FlatList as it has a convenient scrollToIndex method.
  Forcing it to render all items as this ensures scrollToIndex
  will work. The performance optimisations provided by FlatList
  can therefore not be utilised. This is fine for lists of the size
  used here. I've gone for simplicity and readblility of maximising
  performace as this is simple app. For longer lists it is recommended
  to render a subset of the list at any give time. For programmatic 
  scrolling to work in this scenario getItemLayout can be used to 
  calculate the height of elements so the distace to scroll can be determined. 
  This is straightforward if all elements are the same height. It 
  can be done for elements varying in height, but this adds complexity.
  onScrollToIndexFailed could also be used but this somewhat hacky.
  */
  return (
    <FlatList
      ref={listRef}
      contentContainerStyle={styles.list}
      data={commentary}
      keyExtractor={item => item.id}
      onScrollToIndexFailed={() => console.log('FAILED')}
      renderItem={({item, index}) => {
        const isNotLastItem = index < commentary.length - 1;
        const isHighlighted = item.id === highlightedItemId;
        return (
          <CommentaryListItem
            item={item}
            renderTimeline={isNotLastItem}
            isHighlighted={isHighlighted}
          />
        );
      }}
    />
  );
};

export default CommentaryList;
