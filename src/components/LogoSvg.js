import React from 'react';
import Svg, { Line,Rect, Path } from 'react-native-svg';

const LogoSvg = () => {
  return (
    <Svg width={120} height={120} viewBox="0 0 120 120">
      
      {/* Orange rounded square */}
      <Rect
        x="20"
        y="20"
        width="80"
        height="80"
        rx="18"
        fill="#FF4D1C"
      />

      {/* Speed lines */}
      <Line x1="6" y1="50" x2="18" y2="50" stroke="#ccc" strokeWidth="2" />
      <Line x1="10" y1="60" x2="18" y2="60" stroke="#ddd" strokeWidth="2" />

      {/* Bike icon (simple path) */}
      <Path
        d="M45 65
           a10 10 0 1 0 0.01 0
           M75 65
           a10 10 0 1 0 0.01 0
           M45 65 L55 45 L70 45 L60 65
           M55 45 L60 35"
        stroke="#fff"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default LogoSvg;

