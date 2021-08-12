import React from "react";
import styled from "styled-components";
import image from "./hero2.png";
import HeroText from "./HeroText";
import Tilt from "react-tilt";

const Hero = () => {
    return (
        <Container >
            <Wrapper>
                <InnerWrapper>
                    <Left>
                        <HeroText />
                    </Left>
                    <TiltWrapper options={{ max: 25 }}>
                        <Img src={image} alt="@gouthamgtronics" />
                    </TiltWrapper>
                </InnerWrapper>
            </Wrapper>
        </Container>
    );
};

const Left = styled.div`
  width: 40%;
  @media (max-width: 670px) {
    width: 100%;
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  border-radius: 30px;
  width: 100%;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Hero;
