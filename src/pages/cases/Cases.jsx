import { useState, useEffect } from "react";
import "./cases.css";
import { sliderImg } from "../../casesData";
import BtnSlider from "../../components/btn/BtnSlider";

const Cases = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== sliderImg.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderImg.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderImg.length);
    }
  };
  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const lastIndex = sliderImg.length;
    if (slideIndex < 0) {
      setSlideIndex(lastIndex);
    }
    if (slideIndex > lastIndex) {
      setSlideIndex(1);
    }
  }, [slideIndex]);

  // This part is used for slide intervals
  useEffect(() => {
    const slider = setInterval(() => {
      setSlideIndex(slideIndex + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [slideIndex]);
  return (
    <>
      <section id="slider-1" className="slider-1 overlay-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 hidden-xs">
              <img
                className="img-responsive img-full mb0"
                src="assets/images/familly.png"
                alt="familly"
              />
            </div>

            {/* carousel */}

            <div className="carousel col-sm-7 col-sm-offset-1">
              <div id="slider_1" className="owl-carousel">
                {sliderImg.map((obj, index) => {
                  return (
                    <div
                      className={
                        slideIndex === index + 1 ? "slide active-anim" : "slide"
                      }
                      key={obj.id}
                    >
                      <div className="slider-1-item-box">
                        <img
                          className="imageIcon"
                          src={obj.image}
                          alt="sliderImages"
                        />
                        <h2>{obj.title}</h2>
                        <p>{obj.description}</p>
                      </div>
                    </div>
                  );
                })}

                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />
                <div className="container-dots">
                  {Array.from({ length: sliderImg.length }).map(
                    (item, index) => (
                      <div
                        onClick={() => moveDot(index + 1)}
                        className={
                          slideIndex === index + 1 ? "dot active" : "dot"
                        }
                        key={index}
                      ></div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cases;
