import Text from "../Text";
import Button from "../Button";

import styled from "styled-components";
import colors from "../../styles/colors";

const Wrapper = styled.main`
  padding: 7.54vh;
  color: ${colors.secundary};
  background: ${colors.primary};
  box-shadow: 0 0.25vh 1.88vh ${colors.dark};

  @media only screen and (max-width: 48em) {
    padding: 3.77vh 0;
  }
`;

const Gateway = () => (
  <Wrapper>
    <div className="container container-fluid">
      <Text
        text="Desenvolvedora web em constante capacitação, que ama solucionar desafios que exigem dinâmica, criatividade e responsabilidade."
        size="2.26"
        align="left"
      />
      <Button href="/portfolio" size="2.26" text="portfolio" MarginTop="3.77" />
      <Button href="/" size="2.26" text="Currículo" MarginTop="2" />
    </div>
  </Wrapper>
);

export default Gateway;
