import "./case.css";
import data from "../../data";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Case = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = items.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, items]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section id="cases" class="slider-1 overlay-light">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 hidden-xs">
            <img
              class="img-responsive img-full mb0"
              src="assets/images/family.png"
              alt="familly"
            />
          </div>
          <div class="col-sm-7 col-sm-offset-1">
            <div id="slider_1" class="owl-carousel">
              <div class="item">
                <div class="slider-1-item-box">
                  {items.map((item, itemIndex) => {
                    const { id, image, title, description } = item;
                    let position = "nextSlide";
                    if (itemIndex === index) {
                      position = "activeSlide";
                    }

                    if (
                      item === index - 1 ||
                      (index === 0 && itemIndex === items.length - 1)
                    ) {
                      position = "lastSlide";
                    }

                    return (
                      <article
                        id="carousel-wrapper"
                        className={position}
                        key={id}
                      >
                        <img src={image} alt={title} className="item-img" />
                        <h2>{title}</h2>
                        <p>{description}</p>
                      </article>
                    );
                  })}
                  <button className="prev" onClick={() => setIndex(index - 1)}>
                    <ChevronLeft />
                  </button>
                  <button className="next" onClick={() => setIndex(index + 1)}>
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case;
