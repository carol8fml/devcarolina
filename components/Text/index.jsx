import styled from "styled-components";

const TextAlign = (props) => {
    switch (props) {
        case "left":
            return "left";
        case "right":
            return "right";
        default:
            return "center";
    }
};

const TitleText = styled.p`
  font-size:${props => props.size}vh;
  text-align: ${(props) => TextAlign(props.align)};
`;

const Text = ({ text, size, align }) => (
    <TitleText size={size} align={align}>
        {text}
    </TitleText>
);

export default Text;