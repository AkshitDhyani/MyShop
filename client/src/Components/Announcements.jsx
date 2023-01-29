import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 30px;
  display: flex;
  background-color: teal;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  ${mobile({ fontSize: "14px" })}
`;
const Announcements = () => {
  return (
    <Container>Super Deal! Free Shipping over purchase of Rs 500</Container>
  );
};

export default Announcements;
