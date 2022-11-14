import React from "react";
import { ImgContainer, Img } from "./resuable.style";

interface _props {
  src: string;
  alt: string;
}

const Image: React.FC<_props> = ({ src, alt }) => {
  return (
    <ImgContainer>
      <Img src={src} alt={alt} />
    </ImgContainer>
  );
};

export default Image;
