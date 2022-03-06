import styled from "styled-components";
import colors from "../../styles/colors";
import typography from "../../styles/typography";

const Wrapper = styled.div`
  margin-top: ${(props) => props.MarginTop}vh;
  display: flex;
  justify-content: center;
`;

const But = styled.a`
  background: ${colors.secundary};
  border: 0;
  border-radius: 1.25vh;
  color: ${colors.primary};
  font-family: ${typography.heading}, sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;
  height: 5vh;
  font-size: ${(props) => props.size}vh;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  &:hover {
    background: ${colors.pink};
    color: ${colors.primary};
    box-shadow: rgb(0 0 0 / 25%) 0 0.37vh 1.63vh;
  }
`;

const Button = ({ text, href, MarginTop, size }) => (
  <Wrapper MarginTop={MarginTop}>
    <But href={href} size={size}>
      {text}
    </But>
  </Wrapper>
);

export default Button;