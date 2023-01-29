// import {
//   FavoriteBorder,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@mui/icons-material";

// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// import { useDispatch } from "react-redux";
// import { addProduct } from "../redux/cartRedux";
// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { IconButton } from "@mui/material";

// const Icon = styled.div`
//   background-color: white;
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   margin: 10px;
//   display: flex;
//   z-index: 5;
//   justify-content: center;
//   align-items: center;
//   pointer: cursor;
//   &:hover {
//     transform: sclae(1.1);
//   }
// `;

// const ProductIcons = styled.div`
//   position: absolute;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   background-color: rgba(0, 0, 0, 0.2);
//   z-index: 3;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.5s ease;
// `;

// const Container = styled.div`
//   flex: 1;
//   min-width: 300px;
//   height: 400px;
//   display: flex;
//   margin: 5px;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid lightgray;
//   background-color: white;
//   position: relative;

//   &: hover ${ProductIcons} {
//     opacity: 100%;
//   } ;
// `;
// const ProductImg = styled.img`
//   height: 80%;
// `;
// const ProductPrice = styled.h3`
//   margin-top: 10px;
// `;
// const ProductTitle = styled.p``;

// const Info = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `;
// const Product = ({ item }) => {
//   const dispatch = useDispatch();

//   let prods = useSelector((state) => state.cart.products);
//   const handleClick = () => {
//     let isExist = false;
//     for (let i = 0; i < prods.length; i++) {
//       if (prods[i]._id === item._id) isExist = true;
//     }
//     if (isExist == true) {
//       toast("Already added to Cart");
//     } else {
//       console.log("item has been added");
//       dispatch(
//         addProduct({
//           ...item,
//           quantity: 1,
//         })
//       );
//     }
//   };

//   return (
//     <Container>
//       <ProductImg src={item.image} />
//       <ProductIcons>
//         <Icon>
//           <Link to={`/product/${item._id}`} style={{ color: "black" }}>
//             <SearchOutlined />
//           </Link>
//         </Icon>
//         <Icon>
//           <IconButton onClick={() => handleClick()} style={{ color: "brown" }}>
//             <ShoppingCartOutlined />
//           </IconButton>
//         </Icon>
//       </ProductIcons>
//       <ToastContainer position="top-center" autoClose={2000} />
//       <Info>
//         <ProductTitle>{item.title}</ProductTitle>
//         <ProductPrice>{item.price}</ProductPrice>
//       </Info>
//     </Container>
//   );
// };

// export default Product;

import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IconButton } from "@mui/material";

const Icon = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 10px;
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
  pointer: cursor;
  &:hover {
    transform: sclae(1.1);
  }
`;

const ProductIcons = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  min-width: 300px;
  height: 400px;
  display: flex;
  margin: 5px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;

  &: hover ${ProductIcons} {
    opacity: 100%;
  } ;
`;
const ProductImg = styled.img`
  height: 80%;
`;
const ProductPrice = styled.h3`
  margin-top: 10px;
`;
const ProductTitle = styled.p``;

const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Product = ({ item }) => {
  const dispatch = useDispatch();

  let prods = useSelector((state) => state.cart.products);
  const handleClick = () => {
    let isExist = false;
    for (let i = 0; i < prods.length; i++) {
      if (prods[i]._id === item._id) isExist = true;
    }
    if (isExist == true) {
      toast("Already added to Cart");
    } else {
      console.log("item has been added");
      console.log(item.price.split(" ")[1].split(",").join(""));
      console.log(item);
      dispatch(
        addProduct({
          ...item,
          quantity: 1,
          total: parseInt(item.price.split(" ")[1].split(",").join("")),
        })
      );
    }
  };

  return (
    <Container>
      <ProductImg src={item.image} />
      <ProductIcons>
        <Icon>
          <Link to={`/product/${item._id}`} style={{ color: "black" }}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <IconButton onClick={() => handleClick()} style={{ color: "brown" }}>
            <ShoppingCartOutlined />
          </IconButton>
        </Icon>
      </ProductIcons>
      <ToastContainer position="top-center" autoClose={2000} />
      <Info>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
      </Info>
    </Container>
  );
};

export default Product;
