import React from 'react';

import CommentaryList from '../commentaryList';
import {ICommentary} from '../../types';

interface IProps {
  commentary: ICommentary[];
}
const Commentary = ({commentary}: IProps) => {
  return <CommentaryList commentary={commentary} />;
};

export default Commentary;
