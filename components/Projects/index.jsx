import Image from "next/image";

import Text from "../Text";
import Works from "./Works";

import styled from "styled-components";
import colors from "../../styles/colors";
import typography from "../../styles/typography";

const Project = styled.main`
  padding: 10vh 0;

  @media only screen and (max-width: 48em) {
    padding: 3.77vh;
  }
`;

const Title = styled.h2`
  font-family: ${typography.heading};
  font-size: 5vh;
  text-transform: uppercase;
  border-bottom: ${colors.secundary} 0.27vh solid;
  text-shadow: ${colors.pink} 0.27vh 0.27vh 0.27vh;
  letter-spacing: 0.41vh;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5vh;
  justify-content: center;
  gap: 4.13vh;

  @media only screen and (max-width: 48em) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 10vh;
  }

  @media only screen and (min-width: 150em) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  box-shadow: ${colors.dark} 0.13vh 0.13vh 0.68vh;
  filter: grayscale(100%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 2.06vh;

  &:hover {
    filter: none;
  }

  @media only screen and (max-width: 48em) {
    margin: 0;
  }
`;

const Divider = styled.div`
  padding: 2.75vh;
`;

const Projects = () => (
  <Project className="container container-fluid">
    <Text text="Projetos concluídos e em progresso." size="2.75" align="left" />
    <Title>Portfolio</Title>
    <Container>
      {Works.map((item, index) => (
        <Card key={index}>
          <Image
            src={item.image}
            width="300"
            height="300"
            alt={item.label}
            priority
          />
          <Divider>
            <Text text={item.label} size="2" align="left" />
            <Text text={item.technologies} size="2.5" align="left" />
          </Divider>
        </Card>
      ))}
    </Container>
  </Project>
);

export default Projects;
