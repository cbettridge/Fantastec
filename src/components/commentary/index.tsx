import React from 'react';
import {View} from 'react-native';

import CommentaryList from '../commentaryList';
import KeyMoments from '../keyMoments';
import {ICommentary} from '../../types';
import styles from './styles';

interface IProps {
  commentary: ICommentary[];
}
const Commentary = ({commentary}: IProps) => {
  return (
    <View style={styles.container}>
      <CommentaryList commentary={commentary} />
      <KeyMoments commentary={commentary} />
    </View>
  );
};

export default Commentary;
