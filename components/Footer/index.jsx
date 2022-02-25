import styled from "styled-components";

const Text = styled.footer`
  text-align: center;
  font-size: 2vh;
`;

const Footer = () => (
  <Text>
    © Carolina Gonçalves {new Date().getFullYear()}. Todos os direitos
    Reservados.
  </Text>
);

export default Footer;