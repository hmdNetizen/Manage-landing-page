import React, { useState } from "react";

const SocialIcon = (props) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
      <path
        fill={mouseOver ? "hsl(12, 88%, 59%)" : "#FFF"}
        d={props.d}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      />
    </svg>
  );
};

export default SocialIcon;
