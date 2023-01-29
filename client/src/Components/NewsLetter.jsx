import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  background-color: #fbf0f4;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({ height: "40vh" })}
`;
const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 5px;
  ${mobile({ fontSize: "30px" })}
`;
const Description = styled.p`
  font-size: 30px;
  ${mobile({ fontSize: "14px" })}
`;
const InputContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 40px;
  border: 1px solid gray;
  ${mobile({ width: "80%" })}
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background-color: teal;
  color: white;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  height: 100%;
  padding-left: 20px;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Description>Get timely updates for your favourity products</Description>
      <InputContainer>
        <Input placeholder="Your Email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
