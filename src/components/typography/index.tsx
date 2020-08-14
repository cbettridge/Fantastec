import React from 'react';
import {Text, TextStyle} from 'react-native';

import styles from './styles';

interface IProps {
  children?: string;
  style?: TextStyle;
  variant: 'h1' | 'h2' | 'body' | 'bodyBold';
}
const Typography = ({children, style, variant}: IProps) => {
  return <Text style={[styles[variant], style]}>{children}</Text>;
};

export default Typography;
