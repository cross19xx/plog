import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const TimeIcon: React.FC<Props> = ({ size, color }) => (
  <Svg viewBox="0 0 512 512" width={size} height={size}>
    <Path
      fill={color}
      d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48zm96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32z"
    />
  </Svg>
);

TimeIcon.defaultProps = {
  size: 24,
  color: 'currentColor',
};

export default TimeIcon;
