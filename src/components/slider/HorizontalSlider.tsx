import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
// import "./SwiperSlider.scss";

const useStyles = makeStyles((theme: Theme) => ({
  sliderContainer: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column-reverse",
    cursor: "pointer",
  },
  sliderItem: {
    height: "20vh",
  },
}));

interface HorizontalSlider {
  children?: React.ReactNode[];
}

SwiperCore.use([Pagination]);

const SwiperSlider = ({ children }: HorizontalSlider) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Swiper
          className={classes.sliderContainer}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{
            clickable: true,
            type: "bullets",
            bulletElement: "span",
            bulletClass: "timeline-icon",
            bulletActiveClass: "timeline-icon-active",
            renderBullet: function (index, className) {
              return `<span class=${className}>•</span>`;
            },
          }}
        >
          {children && children.map((child, index) => <SwiperSlide key={index}>{child}</SwiperSlide>)}
        </Swiper>
      </div>
    </>
  );
};
export default SwiperSlider;
