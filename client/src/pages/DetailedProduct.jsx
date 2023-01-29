import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import NavBar from "../Components/NavBar";
import NewsLetter from "../Components/NewsLetter";
import { mobile } from "../Responsive";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PORT from "../Strings";

const Container = styled.div`
  margin: 20px;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column" })}
`;
const ProductImg = styled.div`
  flex: 1;
  ${mobile({ fontSize: "14px" })}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  ${mobile({ height: "50vh" })}
`;
const ProductInfo = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const Title = styled.h1`
  font-size: 60px;
  letter-spacing: 3px;
  color: teal;
  font-weight: bolder;
  ${mobile({ fontSize: "25px", letterSpacing: "0px", textAlign: "center" })}
`;
const Price = styled.p`
  font-size: 30px;
  margin-top: 10px;
  ${mobile({ fontSize: "18px", textAlign: "center" })};
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
const Dimension = styled.p`
  margin-top: 20px;
  display: flex;
`;
const Thickness = styled.p`
  margin-top: 10px;
  display: flex;
`;
const Color = styled.p`
  margin-top: 10px;
  display: flex;
`;

const DetailedProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [prod, SetProd] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(
        `http://localhost:${PORT()}/api/product/` + productId
      );
      SetProd(res.data);
    };
    getProduct();
  }, [productId]);

  let prods = useSelector((state) => state.cart.products);
  const handleClick = () => {
    let isExist = false;
    for (let i = 0; i < prods.length; i++) {
      if (prods[i]._id === productId) isExist = true;
    }
    if (isExist == true) {
      toast("Already added to Cart");
    } else {
      dispatch(
        addProduct({
          ...prod,
          quantity: 1,
        })
      );
    }
  };

  return (
    <>
      <NavBar />
      <Announcements />
      <Container>
        <Wrapper>
          <ProductImg>
            <Image src={prod.image} />
          </ProductImg>
          <ProductInfo>
            <Title>{prod.title}</Title>
            <Price>{prod.price}</Price>
            <Button onClick={handleClick}>ADD TO CART</Button>
            <ToastContainer />
            <Dimension>
              <b>Dimension : </b>&nbsp;
              {prod.dimension}
            </Dimension>
            <Thickness>
              <b>Thickness : </b>&nbsp;&nbsp;
              {prod.thickness}
            </Thickness>
            <Color>
              <b>Dial Color : </b>&nbsp;&nbsp;
              {prod.color}
            </Color>
          </ProductInfo>
        </Wrapper>
      </Container>
      <NewsLetter />
    </>
  );
};

export default DetailedProduct;
