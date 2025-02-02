import React from "react";
import { Wrapper, Button } from "assets/styles/style";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import ImageDetailsArea from "views/ImageDetailsPage/components/ImageDetailsArea/ImageDetailsArea";
import ImageDetails from "views/ImageDetailsPage/components/ImageDetails/ImageDetails";
import { Link } from "react-router-dom";

const ImageDetailsPage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <ImageDetailsArea/>
        <ImageDetails/>
        <Link to="/">
          <Button>Home Page</Button>
        </Link>
      </Wrapper>
      <Footer />
    </>
  );
};

export default ImageDetailsPage;
