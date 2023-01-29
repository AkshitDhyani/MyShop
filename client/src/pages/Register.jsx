import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAPI } from "../redux/apiCalls";
import { userLoginStart } from "../redux/userRedux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px 0;
  padding-left: 10px;

  margin: 20px 10px 0 0;
`;
const Agreement = styled.div`
  font-size: 14px;
  margin-top: 20px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  font-size: 14px;
  cursor: pointer;
  background-color: teal;
  color: white;
  border: none;
  ${mobile({ width: "100%" })}
`;

const Error = styled.p`
  color: red;
  margin-top: 10px;
  text-align: center;
`;

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  const { isFetching, isError } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("create clicked");
    console.log(firstName);
    e.preventDefault();
    dispatch(userLoginStart());
    console.log(pass);
    registerAPI(dispatch, {
      email,
      password: pass,
      firstname: firstName,
      lastname: lastName,
      username: userName,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <Input placeholder="Confirm Password" />
        </Form>
        <Agreement>
          By creating an account, I consent to the processing of personal data
          in accordance of <b>PRIVACY POLICY</b>
        </Agreement>
        {isError && <Error>Something went wrong!</Error>}
        <Button onClick={handleClick} disabled={isFetching}>
          Create
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Register;
