import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BannerImage from "../assets/images/Banner.jpg";
import { mobile } from "../Responsive";

const BannerText = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 100vw;
  margin-top: 50px;
  height: 40vh;
  position: relative;
  &:hover ${BannerText} {
    background-color: rgba(0, 0, 0, 0);
  }
  ${mobile({ marginTop: "10px" })}
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Text = styled.h1`
  color: white;
  font-weight: 300;
  margin-left: 50px;
`;
const Button = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  width: 280px;
  background-color: white;
  margin-left: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DiscoverBanner = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={BannerImage} />
      </ImageContainer>
      <BannerText>
        <Text>Discover All Watches</Text>
        <Link to="/products">
          <Button>Discover Now</Button>
        </Link>
      </BannerText>
    </Container>
  );
};

export default DiscoverBanner;
