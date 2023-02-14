import React from "react";
import styled from "styled-components";

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 20px;
  padding-bottom: 75%;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius.small};
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100;
  height: 100;
`;

function RatioImage({ src, alt }: RatioImageProps) {
  return (
    <StyledImageWrapper>
      <Image src={src} alt={alt} />
    </StyledImageWrapper>
  );
}

export default RatioImage;
