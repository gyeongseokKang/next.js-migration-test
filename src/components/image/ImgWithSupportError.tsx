import React, { SyntheticEvent } from "react";

interface ImgWithSupportErrorProp {
  imgSrc: string;
  className?: string | undefined;
  altText?: string;
  style?: React.CSSProperties;
}

const ImgWithSupportError = ({ imgSrc = "", altText, style, className }: ImgWithSupportErrorProp) => {
  return (
    <img
      className={className}
      style={style}
      src={imgSrc}
      onError={(e: SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = `/images/roundin_logo.png`;
      }}
      alt={altText}
    />
  );
};

export default ImgWithSupportError;
