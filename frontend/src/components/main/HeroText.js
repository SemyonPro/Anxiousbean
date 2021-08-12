import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h5>Bringing coffee beans from around the world<br/> straight to your door step.</h5>
      <h2>Experience</h2>
      <h2>Flavors</h2>
      <h2>Worldwide</h2>
      <BtnContainer>
        <button className="readmore">Choose Taste</button>
        <button>Coffee Subscription</button>
      </BtnContainer>
    </Container>
  );
};

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #7F5539;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #7F5539;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      box-shadow: 0px 17px 16px -11px #7F5539;
      transform: translateY(-5px);
    }
  }

  .readmore {
    color: #7F5539;
    background: transparent;
    border: 3px solid #7F5539;
    &:hover {
      box-shadow: 0px 17px 16px -11px #7F5539;
      transform: translateY(-5px);
    }
  }
`;

const Container = styled.div`
  padding: 1rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #B08968;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #7F5539;
    }
    &:nth-of-type(3) {
      color: #9C6644;
    }
  }
`;

export default HeroText;
