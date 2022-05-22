import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const RightCaretIcon: React.FC<Props> = ({ color, size }) => (
  <Svg viewBox="0 0 512 512" width={size} height={size}>
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="m184 112 144 144-144 144"
    />
  </Svg>
);

export default RightCaretIcon;
