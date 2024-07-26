import styled from "styled-components";

const RoomSelectorDiv = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 10px;
  gap: 10px;

  border: 2px solid var(--secondary-foreground);
  background-color: var(--secondary-background);
`;

const LateralButtonFlow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-evenly;
`;

export { RoomSelectorDiv, LateralButtonFlow };
