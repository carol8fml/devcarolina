import Image from "next/image";
import Text from "../Text";
import SocialMenu from "../SocialMenu";

import styled from "styled-components";
import typography from "../../styles/typography";

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10vh 0;

  @media only screen and (max-width: 48em) {
    padding: 3.77vh 0;
  }
`;

const Container = styled.div`
  align-items: center;
  display: flex;

  @media only screen and (max-width: 48em) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const WrapperTitle = styled.div`
  margin-left: 4vh;

  @media only screen and (max-width: 48em) {
    margin: 4vh 0 0;
  }
`;

const Title = styled.h1`
  font-family: ${typography.heading};
  text-transform: uppercase;
  font-size: 3vh;

  @media only screen and (max-width: 48em) {
    font-size: 3vh;
    text-align: center;
  }
`;

const Header = () => (
  <>
    <WrapperHeader className="container container-fluid">
      <Container>
        <Image
          src="/logo.png"
          width="90"
          height="90"
          alt="Logo"
          priority
        />
        <WrapperTitle>
          <Title>Carolina Gonçalves</Title>
          <Text text="Desenvolvedora Web" align="left" size="2.51" />
        </WrapperTitle>
      </Container>
      <SocialMenu />
    </WrapperHeader>
  </>
);

export default Header;