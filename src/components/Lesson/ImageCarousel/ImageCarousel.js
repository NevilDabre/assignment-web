import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ selectedImageIndex }) => {
  return (
    <Carousel
      selectedItem={selectedImageIndex || 0}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img
          style={{ width: "100%", height: "100%" }}
          alt="Watson and Crick DNA Model"
          src="https://ichef.bbci.co.uk/images/ic/448xn/p071f6xk.jpg"
        />
        <p className="legend">
          Watson and Crick DNA Model. <small>Image Credit: BBC UK</small>
        </p>
      </div>
      <div>
        <img
          alt="DNA function replication"
          src="https://cdn.pixabay.com/photo/2013/07/18/10/55/dna-163466_960_720.jpg"
        />
        <p className="legend">
          DNA function replication. <small>Image Credit: Pixabay</small>
        </p>
      </div>
      <div>
        <img
          alt="DNA function proteins"
          src="https://cdn.pixabay.com/photo/2013/07/18/10/59/dna-163710__340.jpg"
        />
        <p className="legend">
          DNA function proteins. <small>Image Credit: Pixabay</small>
        </p>
      </div>
      <div>
        <img
          alt="DNA function mutations"
          src="https://cdn.pixabay.com/photo/2019/03/20/15/48/dna-4068826_960_720.jpg"
        />
        <p className="legend">
          DNA function mutations. <small>Image Credit: Pixabay</small>
        </p>
      </div>
    </Carousel>
  );
};
export default ImageCarousel;
