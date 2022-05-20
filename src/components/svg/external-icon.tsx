import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const ExternalIcon: React.FC<Props> = ({ size, color }) => (
  <Svg viewBox="0 0 16 16" width={size} height={size}>
    <Path
      fill={color}
      d="M9 2v1h3.293l-6.27 6.273.704.704L13 3.707V7h1V2ZM4 4c-1.105 0-2 .895-2 2v6c0 1.105.895 2 2 2h6c1.105 0 2-.895 2-2V7l-1 1v4c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h4l1-1Z"
    />
  </Svg>
);

ExternalIcon.defaultProps = {
  size: 24,
  color: 'currentColor',
};

export default ExternalIcon;
