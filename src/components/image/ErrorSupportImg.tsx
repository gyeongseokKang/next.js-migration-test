import React, { SyntheticEvent } from "react";

interface ErrorSupportImgProp {
  imgSrc: string;
  className?: string | undefined;
  altText?: string;
  style?: React.CSSProperties;
}

const ErrorSupportImg = ({ imgSrc = "", altText, style, className }: ErrorSupportImgProp) => {
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

export default ErrorSupportImg;
