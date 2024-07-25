import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  SlidereImg1,
  SlidereImg2,
  SlidereImg3,
} from "../../assets/images";
// import Image from "../designLayouts/Image";

const CustomSlide = ({ Subtext, backgroundImage, text, buttonLink, buttonText }) => (
  <div
    style={{
      position: "relative",
      backgroundImage: `url('${backgroundImage}')`, // Dynamic background image
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Center vertically
      height: '550px',
    }}
  >
    <div
      style={{
        maxWidth: "650px", // Adjust the maxWidth as needed
      }}
    >
      <h1
        style={{
          marginBottom: "15px",
          fontSize: "2.5rem", // Adjust the font size as needed
          color: "#000", // Black color
          fontWeight: "700",
        }}
      >
        {text}
      </h1>
      <p
        style={{
          marginBottom: "25px",
          fontSize: "1.5rem", // Adjust the font size as needed
          color: "#222", // Gray color
        }}
      >
        {Subtext}
      </p>

      <Link to={buttonLink}>
        <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold">
          {buttonText}
        </button>
      </Link>
    </div>
  </div>
);

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}>{dots}</ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  
  
  const slides = [
    {
      backgroundImage: SlidereImg1,
      text: "Брусчатка кирпич вибропрессова нная",
      Subtext:
        "Высокие эксплуатационные показатели делают вибропрессованную брусчатку востребованным строительным материалом.",
      buttonLink: "/offer",
      buttonText: "Shop Now",
    },
    {
      backgroundImage: SlidereImg2,
      text: "Тротуарная плитка «Кирпич»",
      Subtext:
        "Зарекомендовала себя как хороший неприхотливый строительный материал. Используется для различных участков, например, парковки, скверы, дворы, приусадебные участки.Основные достоинства:",
      buttonLink: "/shop",
      buttonText: "About-us",
    },
    {
      backgroundImage: SlidereImg3,
      text: " Плитка «Цокольные облицовки»",
      Subtext:
        "Данный вид плитки обладает рядом положительных характеристик: твердостью, морозостойкостью, устойчивостью к воздействию солнечных лучей, атмосферных осадков. У нас Вы можете купить тротуарную плитку «Цокольные облицовки» в одном цвете, либо в разных оттеночных вариациях. Комбинируя несколько цветов, можно создать уникальную композицию.",
      buttonLink: "/contact",
      buttonText: "Contact-us",
    },
    // Add more slides as needed
  ];

  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <CustomSlide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;