// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import styled from "styled-components";
// import Announcements from "../Components/Announcements";
// import NavBar from "../Components/NavBar";
// import NewsLetter from "../Components/NewsLetter";

// import Products from "../Components/Products";
// import { mobile } from "../Responsive";

// const Container = styled.div`
//   margin: 20px;
// `;
// const FilterContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;
// const Title = styled.h1`
//   font-size: 50px;
//   ${mobile({ fontSize: "40px" })}
// `;
// const Filter = styled.div`
//   display: flex;
//   margin-top: 10px;
//   ${mobile({ justifyContent: "space-between" })}
// `;

// const FilterText = styled.div`
//   font-size: 20px;
//   ${mobile({ fontSize: "17px" })}
// `;

// const Select = styled.select`
//   margin-left: 10px;
//   padding: 0px 10px 0px 10px;
//   ${mobile({ width: "140px" })}
// `;
// const Option = styled.option``;

// const AllProducts = () => {
//   const [filter, setFilter] = useState();

//   const [sort, setSort] = useState();

//   const handleFilter = (e) => {
//     setFilter(e.target.value);
//   };

//   const handleSort = (e) => {
//     setSort(e.target.value);
//   };

//   return (
//     <>
//       <NavBar />
//       <Announcements />
//       <Container>
//         <Title>All Watches</Title>
//         <FilterContainer>
//           <Filter>
//             <FilterText>Filter Watches :</FilterText>
//             <Select onChange={handleFilter}>
//               <Option disabled selected>
//                 CATEGORY
//               </Option>
//               <Option>SPORTS</Option>
//               <Option>CLASSIC</Option>
//             </Select>
//           </Filter>
//           <Filter>
//             <FilterText>Sort Watches :</FilterText>
//             <Select onChange={handleSort}>
//               <Option disabled selected>
//                 PRICE
//               </Option>
//               <Option>ASCENDING</Option>
//               <Option>DESCENDING</Option>
//             </Select>
//           </Filter>
//         </FilterContainer>
//       </Container>
//       <Products myfilter={filter} sort={sort} />
//       <NewsLetter />
//     </>
//   );
// };

// export default AllProducts;

import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import NavBar from "../Components/NavBar";
import NewsLetter from "../Components/NewsLetter";
import fetchProducts from "../FetchQueries/fetchProducts";

import Products from "../Components/Products";
import { mobile } from "../Responsive";
import { useEffect } from "react";

const Container = styled.div`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;
const Title = styled.h1`
  font-size: 50px;
  ${mobile({ fontSize: "40px" })}
`;
const Filter = styled.div`
  display: flex;
  margin-top: 10px;
  ${mobile({ justifyContent: "space-between" })}
`;

const FilterText = styled.div`
  font-size: 20px;
  ${mobile({ fontSize: "17px" })}
`;

const Select = styled.select`
  margin-left: 10px;
  padding: 0px 10px 0px 10px;
  ${mobile({ width: "140px" })}
`;
const Option = styled.option``;

const AllProducts = () => {
  const prods = useQuery(["products"], fetchProducts);
  const [filter, setFilter] = useState();
  const [sort, setSort] = useState();
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    if (prods.data) setProdList(prods.data);
  }, [prods.data]);

  useEffect(() => {
    if (prods.data) {
      let tempList = [...prods.data];

      tempList = filter
        ? tempList.filter((item) => item.category === filter)
        : tempList;

      tempList =
        sort === "ASCENDING"
          ? tempList.sort(
              (a, b) =>
                a.price.split(" ")[1].split(",").join("") -
                b.price.split(" ")[1].split(",").join("")
            )
          : sort === "DESCENDING"
          ? tempList.sort(
              (a, b) =>
                b.price.split(" ")[1].split(",").join("") -
                a.price.split(" ")[1].split(",").join("")
            )
          : tempList;

      setProdList(tempList);
    }
  }, [sort, filter]);

  if (prods.isLoading) {
    return (
      <div>
        <h2>LOADING...</h2>
      </div>
    );
  }

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <NavBar />
      <Announcements />
      <Container>
        <Title>All Watches</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Category :</FilterText>
            <Select onChange={handleFilter}>
              <Option />
              <Option>SPORTS</Option>
              <Option>CLASSIC</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort By Price :</FilterText>
            <Select onChange={handleSort}>
              <Option />
              <Option>ASCENDING</Option>
              <Option>DESCENDING</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products data={prodList} />
      <NewsLetter />
    </>
  );
};

export default AllProducts;
