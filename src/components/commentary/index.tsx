import React, {useState} from 'react';
import {View} from 'react-native';

import CommentaryList from '../commentaryList';
import KeyMoments from '../keyMoments';
import {ICommentary} from '../../types';
import styles from './styles';

interface IProps {
  commentary: ICommentary[];
}
const Commentary = ({commentary}: IProps) => {
  const [highlightedItemId, setHighlightedItemId] = useState(undefined);

  return (
    <View style={styles.container}>
      <CommentaryList
        commentary={commentary}
        highlightedItemId={highlightedItemId}
      />
      <KeyMoments
        commentary={commentary}
        onSelectMoment={setHighlightedItemId}
      />
    </View>
  );
};

export default Commentary;
