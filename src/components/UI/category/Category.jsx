import React from "react";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category-01.png";
import categoryImg02 from "../../../assets/images/category-01.png";
import categoryImg03 from "../../../assets/images/category-01.png";
import categoryImg04 from "../../../assets/images/category-01.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "NorthWest",
    imgUrl: categoryImg01,
  },
  {
    display: "SouthWest",
    imgUrl: categoryImg02,
  },

  {
    display: "Center",
    imgUrl: categoryImg03,
  },

  {
    display: "Litoral",
    imgUrl: categoryImg04,
  },
  {
    display: "West",
    imgUrl: categoryImg04,
  },
  {
    display: "East",
    imgUrl: categoryImg04,
  },
  {
    display: "North",
    imgUrl: categoryImg04,
  },
  {
    display: "South",
    imgUrl: categoryImg04,
  },
  {
    display: "FarNorth",
    imgUrl: categoryImg04,
  },

];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
