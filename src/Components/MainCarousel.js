import React from "react";
import { Carousel } from "react-bootstrap";

const MainCarousel = () =>{
    return(
      <Carousel>
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://images3.alphacoders.com/136/136595.jpg"
                  alt="First slide"
                />
                  <h1 class="Hello">Hello</h1>
                  <p class="Hello1">I'm Jerome </p>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/277534964_3266710853616189_6306238281240243095_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeGXaWypP2We13xKwNxqxG9NLChJW7TfOaQsKElbtN85pIHW6-i_Fx0hgpUDdMwVhUsFhekD8hISouzOKbWtqGWY&_nc_ohc=Ir6k2hiAj0sAX_xIUka&tn=GGCMv0Zi2rdcdMW5&_nc_ht=scontent.fcrk4-1.fna&oh=00_AfDFdt34EpQq82XdIqEaPdymVNuwrBEfOpYsSnghhyuONw&oe=63ADBE44"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h1 class="black-color-text">I'm a Software Engineer </h1>
                  <p class="black-color-text">I work for Cognizant Softvision / Magenic</p>
                </Carousel.Caption>

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
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