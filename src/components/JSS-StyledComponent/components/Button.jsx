import styled from "styled-components";

// Truyền props
export const Button = styled.button`
  color: white;
  background-color: ${(props) => (props.primary ? "blue" : "black")};
`;

// Kế thừa
export const SmallButton = styled(Button)`
  background-color: orange;
  font-size: 12px;
`;
