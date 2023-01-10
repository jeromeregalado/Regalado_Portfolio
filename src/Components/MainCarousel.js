import React from "react";
import { Carousel } from "react-bootstrap";
import softvisionImage from ".././Images/softvisionImage.png"

const MainCarousel = () =>{
    return(
      <Carousel>
                <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100 carouselImg img-fluid"
                  src="https://i.pinimg.com/originals/a1/56/e0/a156e097ec112504e882d5df0a90fec0.jpg"
                  alt="First slide"
                />
                  <h1 class="Hello">Hello</h1>
                  <p class="Hello1">I'm Jerome </p>
              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100 carouselImg img-fluid"
                  src={softvisionImage}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1 class="black-color-text">I'm a Software Engineer </h1>
                  <p class="black-color-text">I work for Cognizant Softvision / Magenic</p>
                </Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item interval={4000}>
                <img
                  className="d-block w-100 carouselImg img-fluid"
                  src="https://media.tenor.com/IDFH8znFG3QAAAAC/spongebob-squarepants-spongebob.gif"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h1>It's a pleasure seeing you look at my website</h1>
                  <p>
                    Hope you like my aesthetics.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
    )
  }

  export default MainCarousel;