import React from "react";
import { Carousel } from "react-bootstrap";

export default function TopBanner() {
  const images = [
    "https://i.ibb.co/2jYvJ6k/SSLCOMMERZ-Pay-With-logo-All-Size-Aug-21-03.png",
    "https://i.ibb.co/gds94Yc/afc7a916c23-02.jpg",
    "https://i.ibb.co/X8DyxTh/7f5f45f07dd-Dweb-entry-otcsale.jpg",
    "https://i.ibb.co/GnGQYDq/johnson-offers-web-4.webp",
    "https://i.ibb.co/jDNSv0x/0331975d9d8-Dweb-nutrition.jpg",
  ];
  return (
    <div>
      <Carousel variant="dark">
        {images.map((image) => {
          return (
            <Carousel.Item>
              <div className="my-5">
                <img
                  key={image}
                  className="d-block img-fluid "
                  src={image}
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
