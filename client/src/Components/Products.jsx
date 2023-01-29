// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Product from "./Product";
// import axios from "axios";
// import Port from "../Strings";
// import { mobile } from "../Responsive";

// const Container = styled.div`
//   display: flex;
//   padding: 20px;
//   justify-content: center;
//   margin-top: 50px;
//   flex-wrap: wrap;
//   ${mobile({ marginTop: "10px" })}
// `;

// const Products = ({ myfilter, sort, from }) => {
//   const [productsList, setProductsList] = useState([]);

//   const [filteredproducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(`http://localhost:${Port()}/api/product`);
//         from === "home"
//           ? setProductsList(res.data.slice(0, 8))
//           : setProductsList(res.data);

//         setFilteredProducts(productsList);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getProducts();
//   }, []);

//   // useEffect(() => {
//   //   console.log("inside filter");

//   //   setFilteredProducts(
//   //     myfilter
//   //       ? productsList.filter((item) => item.category === myfilter)
//   //       : productsList
//   //   );
//   // }, [productsList, myfilter]);

//   useEffect(() => {
//     let tempList = [...productsList];

//     console.log("inside filter");

//     console.log(tempList);
//     tempList = myfilter
//       ? tempList.filter((item) => item.category === myfilter)
//       : tempList;
//     console.log("after filter");
//     console.log(tempList);
//     tempList =
//       sort === "ASCENDING"
//         ? tempList.sort(
//             (a, b) =>
//               a.price.split(" ")[1].split(",").join("") -
//               b.price.split(" ")[1].split(",").join("")
//           )
//         : sort === "DESCENDING"
//         ? tempList.sort(
//             (a, b) =>
//               b.price.split(" ")[1].split(",").join("") -
//               a.price.split(" ")[1].split(",").join("")
//           )
//         : tempList;
//     console.log("after sort");
//     console.log(tempList);
//     setFilteredProducts(tempList);
//   }, [productsList, sort, myfilter]);

//   return (
//     <Container>
//       {filteredproducts.map((item) => (
//         <Product item={item} key={item.id} />
//       ))}
//     </Container>
//   );
// };

// export default Products;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import Port from "../Strings";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
  ${mobile({ marginTop: "10px" })}
`;

const Products = ({ data }) => {
  return (
    <Container>
      {data.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </Container>
  );
};

export default Products;
