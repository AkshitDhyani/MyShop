import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";

const CategoryImg = styled.img`
  height: 100%;
width:100%,
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 10px;
  width: 30vw;
  display: flex;
  ${mobile({ padding: "0px", margin: "0px", width: "100%", marginTop: "10px" })}
`;

const CategoryTitle = styled.h1`
  font-size: 70px;
  -webkit-text-stroke: 2px black;
  letter-spacing: 10px;
  color: white;
  ${mobile({ fontSize: "50px" })}
`;
const CategoryButton = styled.button`
  margin-top: 10px;
  padding: 8px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: white;
  ${mobile({ fontSize: "15px" })}
`;

const Category = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.title}`}>
        <CategoryImg src={item.img} />
        <Info>
          <CategoryTitle>{item.title}</CategoryTitle>
          <CategoryButton>DISCOVER MORE</CategoryButton>
        </Info>
      </Link>
    </Container>
  );
};

export default Category;
