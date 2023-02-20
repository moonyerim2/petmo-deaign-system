import React from "react";
import { StyledSlider } from "../styled";
import RatioImage from "./RatioImage";
import Badge from "./Badge";

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
      {imageType === "image" && (
        <div style={{ position: "relative" }}>
          <RatioImage src={images[0].src} alt={images[0].alt} />
          {images.length > 1 && <Badge>+{images.length - 1}</Badge>}
        </div>
      )}
    </>
  );
}

export default CardImages;
