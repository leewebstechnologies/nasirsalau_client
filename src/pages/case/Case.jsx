import "./case.css";
import { useState } from "react";
import data from "../../data";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
const Case = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <>
      <section id="card-1" className="card-1 card-1 overlay-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-1 hidden-xs"></div>
            <div className="col-sm-7 col-sm-offset-1">
              <div id="card_1">
                <div className="item">
                  <div className="card-1-item-box">
                    {items.map((item, itemIndex) => {
                      const { id, image, title, description } = item;
                      // more stuff coming up
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
                        <div className="position" key={id}>
                          <img className="itemImage" src={image} alt={title} />
                          <h2>{title}</h2>
                          <p>{description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <ChevronLeft />
              </button>
              <button className="next" onClick={() => setIndex(index + 1)}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case;
