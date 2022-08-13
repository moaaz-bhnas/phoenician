import { memo } from "react";
import styled from "styled-components";
import Item from "./Item";

const StyledList = styled.ul``;

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
