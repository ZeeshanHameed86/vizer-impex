import React from "react";
import icon1 from "./assets/Design-Process.png";
import icon2 from "./assets/Sublimation-Printing-Process.png";
import icon3 from "./assets/Heat-Press-Process.png";
import icon4 from "./assets/Cut-&-Sew-Process.png";
import image1 from "./assets/Sports-wear.jpg";
import image2 from "./assets/Fitness-wear.jpg";
import image3 from "./assets/Casual-wear.jpg";
import image4 from "./assets/Sublimation.jpg";
import image5 from "./assets/Jackets.jpg";
import { FaTshirt, FaShippingFast, FaRegMoneyBillAlt } from "react-icons/fa";

export const data = [
  {
    id: 1,
    title: "custom design",
    icon: icon1,
  },
  {
    id: 2,
    title: "sublimation printing",
    icon: icon2,
  },
  {
    id: 3,
    title: "heat transfer press",
    icon: icon3,
  },
  {
    id: 4,
    title: "cut & sew",
    icon: icon4,
  },
];

export const featureddata = [
  {
    title: "Sports Wear",
    desc: "Check out the variety of Sports Wear we have",
    image: image1,
  },
  {
    title: "Fitness Wear",
    desc: "Check out the variety of Fitness Wear we have",
    image: image2,
  },
  {
    title: "Casual Wear",
    desc: "Check out the variety of Casual Wear we have",
    image: image3,
  },
  {
    title: "Sublimation",
    desc: "Check out the variety of Sublimation Designs we have",
    image: image4,
  },
  {
    title: "Jackets",
    desc: "Check out the variety of Jackets we have",
    image: image5,
  },
];

export const services = [
  {
    title: "BEST QUALITY PRODUCTS",
    desc: "We do not compromise on quality. We will provide you the best quality fabrics for your products",
    icon: <FaTshirt className="services-icon" />,
  },
  {
    title: "FAST SHIPPING",
    desc: "Its really hard to wait for shipment. We will provide you secure and fast shipping for your packages",
    icon: <FaShippingFast className="services-icon" />,
  },
  {
    title: "BEST MARKET PRICE",
    desc: "We are offering you the best prices as compared to the market to make long term Satisfied Clients",
    icon: <FaRegMoneyBillAlt className="services-icon" />,
  },
];
