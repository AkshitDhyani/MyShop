import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import Announcements from "../Components/Announcements";
import Categories from "../Components/Categories";
import DiscoverBanner from "../Components/DiscoverBanner";
import NavBar from "../Components/NavBar";
import NewsLetter from "../Components/NewsLetter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";
import fetchProducts from "../FetchQueries/fetchProducts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Home = () => {
  const prods = useQuery(["products"], fetchProducts);

  if (prods.isLoading) {
    return (
      <div>
        <h2>LOADING...</h2>
      </div>
    );
  }

  return (
    <Container>
      <Announcements />
      <NavBar />
      <Slider />

      <DiscoverBanner />
      <Products data={prods.data.slice(0, 8)} />
      <NewsLetter />
    </Container>
  );
};

export default Home;
