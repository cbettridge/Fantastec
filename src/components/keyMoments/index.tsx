import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Collapsible from 'react-native-collapsible';

import {ICommentary} from '../../types';
import Typography from '../typography';
import KeyMomentsHeader from '../keyMomentsHeader';
import styles from './styles';

interface IProps {
  commentary: ICommentary[];
  onSelectMoment: (id: string) => void;
}
const KeyMoments = ({commentary, onSelectMoment}: IProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.container}>
      <KeyMomentsHeader
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <Collapsible collapsed={isCollapsed}>
        {commentary.map(item =>
          item.keyMoment !== null ? (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => onSelectMoment(item.id)}>
              <Typography key={item.id} variant="body">
                {item.keyMoment}
              </Typography>
            </TouchableOpacity>
          ) : null,
        )}
      </Collapsible>
    </View>
  );
};

export default KeyMoments;
