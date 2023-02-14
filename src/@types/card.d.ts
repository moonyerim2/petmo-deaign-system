interface CardImage {
  id: string | number;
  src: string;
  alt: string;
}

type CardImageType = slider | image;

interface StyledCardTextProps {
  isSummary: boolean;
  lineClamp: number;
  children: ReactNode;
}

interface LargeCardProps extends StyledCardTextProps {
  userBadgeData: Pick<UserBadgeProps>;
  mainTag: string;
  subTags: string[];
  imageType: slider | Image;
  images: CardImage[];
}

interface StyledSliderProps {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
}

interface CardImagesProps {
  imageType: CardImageType;
  images: CardImage[];
}

type RatioImageProps = Pick<CardImage>;
