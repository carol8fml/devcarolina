import SocialLinks from "../SocialLinks";
import Icons from "../SocialLinks/Icons";

import styled from "styled-components";
import colors from "../../styles/colors";

const List = styled.ul`
  display: flex;
  margin-bottom: 20vh;
`;

const Link = styled.a`
  text-decoration: none;
  transition: color 0.5s;
  margin: 0 1vh;
  
  svg {
    transition: color 0.5s;

    &:hover {
      color: ${colors.pink};
    }
  }
`;

const SocialMenu = () => (
  <List>
    {SocialLinks.map((item, index) => {
      const Icon = Icons[item.label];
      return (
        <li key={index}>
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
          >
            <Icon size="40" />
          </Link>
        </li>
      );
    })}
  </List>
);

export default SocialMenu;