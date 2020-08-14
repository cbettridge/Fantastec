import React from 'react';
import {TouchableOpacity} from 'react-native';

import Typography from '../typography';
import DownArrowIcon from '../../icons/downArrow';
import UpArrowIcon from '../../icons/upArrow';
import styles from './styles';

interface IProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}
const KeyMomentsHeader = ({isCollapsed, setIsCollapsed}: IProps) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.header}
      onPress={() => setIsCollapsed(!isCollapsed)}>
      <Typography variant="body">Key Moments</Typography>
      {isCollapsed === true && <DownArrowIcon />}
      {isCollapsed === false && <UpArrowIcon />}
    </TouchableOpacity>
  );
};

export default KeyMomentsHeader;
