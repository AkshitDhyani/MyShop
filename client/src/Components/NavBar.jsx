import { Search, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogout } from "../redux/userRedux";
import { resetCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bolder;
  color: black;
`;
const MenuItem = styled.div`
  margin-left: 25px;
`;
const NavText = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  console.log(user);
  const handleClick = () => {
    dispatch(userLogout());
    dispatch(resetCart());
  };

  return (
    <Container>
      <Wrapper>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>MY.SHOP</Logo>
          </Link>
        </Center>
        <NavText>
          Hello &nbsp; <b>{user === null ? "" : user.username}</b>
        </NavText>
        <Right>
          {/* {user === null ? (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Register</MenuItem>
            </Link>
          ) : (
            <></>
          )}
          {user === null ? (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>Login</MenuItem>
            </Link>
          ) : (
            <></>
          )} */}
          {user === null ? (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>Register</MenuItem>
              </Link>

              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>Login</MenuItem>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem onClick={handleClick}>Logout</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart ">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
