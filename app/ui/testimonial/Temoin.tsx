import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

const Temoin = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(2); // Exemple : Aller à la 3ème diapositive
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      {/* Ajoutez plus de slides au besoin */}
    </Slider>
  );
};

export default Temoin;
