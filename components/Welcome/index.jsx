import Image from "next/image";
import SocialMenu from "../SocialMenu";
import styled from "styled-components";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
  text-align: center;
`;

const Text = styled.p`
  margin: 5vh 0;
  font-size: 3vh;
`;

const Welcome = () => (
  <Wrapper>
    <Image
      src="/logo.png"
      width="128"
      height="131"
      alt="Avatar de uma menina com cabelo afro usando oculos"
      priority
      quality={85}
    />
    <Text>Site em manutenção, em breve um novo portfólio</Text>
    <SocialMenu />
  </Wrapper>
);

export default Welcome;