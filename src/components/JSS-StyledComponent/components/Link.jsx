import styled from "styled-components";

export const Link = ({ className, children, ...restProps }) => (
  <a className={className}>{children}</a>
);

export const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold !important;
`;
