import { ArrowLeftSquareFill } from "@styled-icons/bootstrap/ArrowLeftSquareFill";

import styled from "styled-components";
import colors from "../../styles/colors";

const Link = styled.a`
  text-decoration: none;
  transition: color 0.5s;
  display: flex;
  float: right;
  color: ${colors.primary};

  &:hover {
    color: ${colors.pink};
  }
  
  svg {
    width: 3vh;
    height: 3vh;
    margin-right: 1.46vh;
  }
`;

const Return = () => (
  <Link href="/" aria-label="Botão para pagina principal">
    <ArrowLeftSquareFill />  Página Principal
  </Link>
);

export default Return;
