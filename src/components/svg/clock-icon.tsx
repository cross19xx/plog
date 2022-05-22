import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const ClockIcon: React.FC<Props> = ({ color, size }) => (
  <Svg viewBox="0 0 512 512" width={size} height={size}>
    <Path
      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
      fill="none"
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={32}
    />
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 128v144h96"
    />
  </Svg>
);

export default ClockIcon;
