import { memo } from "react";
import styled from "styled-components";
import { rawList } from "../../utils/Style";
import Item from "./Item";

const StyledList = styled.ul`
  ${rawList}

  display: flex;
`;

const navigationLinks = [
  { text: "About us", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Contacts", href: "/contacts" },
];

function List() {
  return (
    <StyledList>
      {navigationLinks.map((link) => (
        <Item key={link.text} link={link} />
      ))}
    </StyledList>
  );
}

export default memo(List);
