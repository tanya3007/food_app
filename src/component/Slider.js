import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider(){
    return(
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/image1.0230ab49.jpg")}
      alt="First slide"
      height="100%"

    />
    <Carousel.Caption style={{top:"50%"}}>
      <h3>First slide label</h3>
      <h2>Some representative placeholder content for the first slide.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/image2.7e340e85.jpg")}
      alt="Second slide"
      height="100%"

    />

    <Carousel.Caption style={{top:"50%"}}>
      <h3>Second slide label</h3>
      <h2>Some representative placeholder content for the second slide</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/image3.b47bb883.jpg")}
      alt="Third slide"
      height="100%"
    />

    <Carousel.Caption style={{top:"50%"}}>
      <h3>Third slide label</h3>
      <h2>Some representative placeholder content for the third slide</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../images/image4.b1e43390.jpg")}
      alt="Fourth slide"
      height="100%"
    />

    <Carousel.Caption style={{top:"50%"}}>
      <h3>Fourth slide label</h3>
      <h2>Some representative placeholder content for the Fourth slide</h2>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

<div className="fault">


</div>
  
        </div>

    )
}