import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SliderData } from "../data/sliderData";
import { mobile } from "../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.Direction === "left" ? "20px" : "")};
  right: ${(props) => (props.Direction === "right" ? "20px" : "")};
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const SlideImg = styled.div`
  flex: 1;
  height 90%;
`;
const Image = styled.img`
  height: 100%;
`;

const SlideInfo = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 2px;
`;
const Price = styled.p`
  font-size: 20px;
  margin: 20px 0px;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: white;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (Direction) => {
    if (Direction === "left")
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    else setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {SliderData.map((items) => (
          <Slide bg={items.bg} key={items.id}>
            <SlideImg>
              <Image src={items.img} />
            </SlideImg>
            <SlideInfo>
              <Title>{items.title}</Title>
              <Price>{items.price}</Price>
              <Link to={`/product/${items.itemId}`}>
                <Button>MORE DETAILS</Button>
              </Link>
            </SlideInfo>
          </Slide>
        ))}
      </Wrapper>
      <Arrow Direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Arrow Direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
