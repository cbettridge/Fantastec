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

      <Collapsible collapsed={isCollapsed} style={styles.collapsable}>
        {commentary.map(item =>
          item.keyMoment !== null ? (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.keyMomentItem}
              onPress={() => onSelectMoment(item.id)}>
              <View style={styles.minuteCircle}>
                <Typography variant="body" style={styles.minute}>
                  {item.minute}
                </Typography>
              </View>
              <Typography
                key={item.id}
                variant="body"
                style={styles.keyMomentText}>
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
