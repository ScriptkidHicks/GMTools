import styled from "styled-components";

const BasicButton = styled.button`
  padding: 10px;
  background-color: var(--main-foreground);
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;

  transition: ease all 100ms;

  &:hover {
    background-color: var(--secondary-foreground);
    color: var(--main-foreground);
  }

  &:active {
    box-shadow: inset 2px 2px 2px black;
    background-color: var(--main-foreground);
    color: white;
  }
`;

export { BasicButton };
