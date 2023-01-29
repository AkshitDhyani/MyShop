import React, { useState } from "react";
import { Link } from "react-router-dom";

import styled, { isStyledComponent } from "styled-components";
import { mobile } from "../Responsive";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "../redux/apiCalls";

import { userLoginStart } from "../redux/userRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  border: 1px solid gray;
  ${mobile({ width: "100%", border: "none" })}
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px 0;
  padding-left: 10px;

  margin: 20px 10px 0 0;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
  &:disabled {
    background-color: black;
    cursor: not-allowed;
  }
`;

const LinkBtn = styled.a`
  text-decoration: underline;
  margin-top: 10px;
  text-align: center;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
  margin-top: 10px;
  text-align: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { isFetching, isError } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    console.log("login start");
    dispatch(userLoginStart());
    console.log(pass);
    loginAPI(dispatch, { email, password: pass });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          {/* <Link to="/"> */}
          <Button onClick={handleClick} disabled={isFetching}>
            Login
          </Button>
          {/* </Link> */}

          {isError && <Error>Something went wrong!</Error>}

          <LinkBtn>Forgot Password?</LinkBtn>
          <Link to="/register" style={{ color: "black", textAlign: "center" }}>
            <LinkBtn>Create an Account</LinkBtn>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
