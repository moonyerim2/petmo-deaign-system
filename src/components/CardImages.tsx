import React from "react";
import { StyledSlider } from "../styled";
import RatioImage from "./RatioImage";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function CardImages({ imageType, images }: CardImagesProps) {
  return (
    <>
      {imageType === "slider" && (
        <StyledSlider {...sliderSettings}>
          {images.map(({ id, src, alt }) => (
            <RatioImage key={id} src={src} alt={alt} />
          ))}
        </StyledSlider>
      )}
    </>
  );
}

export default CardImages;
