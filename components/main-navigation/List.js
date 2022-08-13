import { memo } from "react";
import styled from "styled-components";
import { rawList } from "../../utils/Style";
import Item from "./Item";

const StyledList = styled.ul`
  ${rawList}

  display: flex;
`;

const navigationLinks = [
  { text: "about", href: "/about" },
  { text: "services", href: "/services" },
  { text: "contacts", href: "/contacts" },
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
