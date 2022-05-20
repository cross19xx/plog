import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const AddIcon: React.FC<Props> = ({ size, color }) => (
  <Svg viewBox="0 0 512 512" width={size} height={size}>
    <Path
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M256 112v288m144-144H112"
    />
  </Svg>
);

AddIcon.defaultProps = {
  size: 24,
  color: 'currentColor',
};

export default AddIcon;
