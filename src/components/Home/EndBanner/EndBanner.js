import React from "react";
import { Carousel } from "react-bootstrap";
import { FaUserFriends } from "react-icons/fa";

export default function EndBanner() {
  const images = [
    "https://i.ibb.co/wygst12/user5.png",
    "https://i.ibb.co/zRcWPtv/user4.png",
    "https://i.ibb.co/rkdbCwr/user3.png",
    "https://i.ibb.co/m5F7nkf/user1.png",
    "https://i.ibb.co/Yy0Mw4h/user2.png",
  ];
  return (
    <div>
      <div className=" m-5 p-2 home-text ">
        <h1>
          <FaUserFriends className="text-custom-color" /> Users Reviews
        </h1>
      </div>
      <Carousel variant="dark">
        {images.map((image) => {
          return (
            <Carousel.Item>
              <div className="my-1">
                <img
                  key={image}
                  className="d-block img-fluid m-auto "
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
