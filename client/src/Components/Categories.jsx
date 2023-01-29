import React from "react";
import styled from "styled-components";
import { CategoriesData } from "../data/categoriesData";
import { mobile } from "../Responsive";
import Category from "./Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 70vh;
  justify-content: center;
  ${mobile({
    flexDirection: "column",
    padding: "0px",
    width: "100%",
    height: "50%",
  })}
`;

const Categories = () => {
  return (
    <Container>
      {CategoriesData.map((item) => (
        <Category item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
