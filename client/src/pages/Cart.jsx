import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import NavBar from "../Components/NavBar";
import { mobile } from "../Responsive";
import { updateProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "0" })}
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  ${mobile({ marginTop: "10px" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ fontSize: "5px", flexDirection: "column" })}
`;

const TopButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  border: ${(props) => (props.type === "filled" ? "none" : "1px solid black")};
  background-color: ${(props) => (props.type === "filled" ? "black" : "white")};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  ${mobile({ margin: "10px" })}
`;

const Text = styled.a`
  cursor: pointer;
  text-decoration: underline;
  margin: 0 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;

const SummaryWrapper = styled.div`
  border: 1px solid gray;
  padding: 40px 40px;
  border-radius: 10px;
  text-align: center;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const ProductDetail = styled.div`
  flex: 2;

  display: flex;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  })}
`;
const Image = styled.img`
  padding: 0 20px;
  width: 300px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.h1`
  font-size: 30px;
  ${mobile({ fontSize: "20px" })}
`;
const ProductDimension = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: "14px" })}
`;
const ProductColor = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: "14px" })}
`;
const ProductThickness = styled.p`
  font-size: 20px;
  ${mobile({ fontSize: "14px" })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SummaryTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px;
  ${mobile({ fontSize: "20px" })}
`;

const SummaryItem = styled.h1`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
`;

const SummaryItemPrice = styled.p`
  font-size: 20px;
  font-weight: 300;
  ${mobile({ fontSize: "14px" })}
`;
const SummaryItemText = styled.p`
  font-size: 20px;
  font-weight: 400;
  ${mobile({ fontSize: "14px" })}
`;
const Price = styled.p`
  font-size: 25px;
  font-weight: 400;
  padding: 20px;
  ${mobile({ fontSize: "20px" })}
`;

const Count = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 0 20px;
`;

const AddItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 8px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: white;
  border: 2px solid teal;
  ${mobile({ fontSize: "14px" })}
`;

const CountButton = styled.button`
  padding: 8px 20px;
  font-size: 20px;
  border-radius: 40px;
  cursor: pointer;
  background-color: white;
  border: 2px solid teal;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClick = (operation, id) => {
    let index = 0;
    cart.products.map((item) => {
      if (item._id === id) {
        if (operation === "add") {
          dispatch(
            updateProduct({
              id: index,
              quantity: item.quantity + 1,
              total: parseInt(item.price.split(" ")[1].split(",").join("")),
            })
          );
        } else {
          if (item.quantity > 1) {
            dispatch(
              updateProduct({
                id: index,
                quantity: item.quantity - 1,
                total: parseInt(item.price.split(" ")[1].split(",").join("")),
              })
            );
          }
        }
      }
      index++;
    });
  };

  console.log("mycart");
  console.log(cart);

  return (
    <Container>
      <NavBar />
      <Announcements />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <Link to="/products/">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          {cart.products.length > 0 ? (
            <>
              <Info>
                {cart.products.map((item, index) => (
                  <Product key={index}>
                    <ProductDetail>
                      <Image src={item.image} />
                      <Details>
                        <ProductName>{item.title}</ProductName>
                        <ProductDimension>
                          <b>Dimension: </b> {item.dimension}
                        </ProductDimension>
                        <ProductThickness>
                          <b>Thickness: </b>
                          {item.thickness}
                        </ProductThickness>
                        <ProductColor>
                          <b>Color: </b>
                          {item.color}
                        </ProductColor>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <AddItems>
                        <CountButton
                          onClick={() => handleClick("sub", item._id)}
                        >
                          -
                        </CountButton>
                        <Count>{item.quantity}</Count>
                        <CountButton
                          onClick={() => handleClick("add", item._id)}
                        >
                          +
                        </CountButton>
                      </AddItems>
                      <Price>
                        Rs{" "}
                        {item.price.split(" ")[1].split(",").join("") *
                          item.quantity}
                      </Price>
                    </PriceDetail>
                  </Product>
                ))}
                <hr></hr>
              </Info>
              <Summary>
                <SummaryWrapper>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Shipping Price</SummaryItemText>
                    <SummaryItemPrice>Rs 1000</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Discount</SummaryItemText>
                    <SummaryItemPrice>- Rs 1000</SummaryItemPrice>
                  </SummaryItem>
                  <SummaryItem>
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>{cart.total}</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW</Button>
                </SummaryWrapper>
              </Summary>{" "}
            </>
          ) : (
            <h1
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              NO PRODUCTS TO SHOW
            </h1>
          )}
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
