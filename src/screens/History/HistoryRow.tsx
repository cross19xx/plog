import React from 'react';
import { View } from 'react-native';

import { History } from '_/types';

type Props = {
  onHistoryPressed: (history: History) => void;
  history: History;
};

const HistoryRow: React.FC<Props> = () => {
  return <View />;
};

export default HistoryRow;
