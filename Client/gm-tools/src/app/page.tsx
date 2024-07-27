"use client";
import { CenterColumnPage } from "@/Components/DivComponents/MainDivs";
import {
  LateralButtonFlow,
  RoomSelectorDiv,
} from "@/Components/DivComponents/InputDivs";
import { SelectorAutoComplete } from "@/Components/Inputs/MainInputs";
import { InitiativeOptions } from "@/Components/ClientData/Options";
import TextField from "@mui/material/TextField";
import { FormLabel } from "@mui/material";
import { BasicButton } from "@/Components/Buttons/Buttons";
import { useState } from "react";

export default function Home() {
  const [createNewRoom, setCreateNewRoom] = useState(true);

  return (
    <CenterColumnPage>
      {createNewRoom && (
        <RoomSelectorDiv>
          <FormLabel>Create A Room</FormLabel>
          <SelectorAutoComplete
            disablePortal
            options={InitiativeOptions}
            renderInput={(params) => <TextField {...params} label="System" />}
          ></SelectorAutoComplete>
          <TextField label="Room Name"></TextField>
          <LateralButtonFlow>
            <BasicButton
              onClick={() => {
                setCreateNewRoom(false);
              }}
            >
              Join a Room?
            </BasicButton>
            <BasicButton>Create</BasicButton>
          </LateralButtonFlow>
        </RoomSelectorDiv>
      )}{" "}
      {!createNewRoom && (
        <RoomSelectorDiv>
          <FormLabel>Join a Room</FormLabel>
          <TextField label="Room Code"></TextField>
          <LateralButtonFlow>
            <BasicButton
              onClick={() => {
                setCreateNewRoom(true);
              }}
            >
              Create a Room?
            </BasicButton>
            <BasicButton>Join</BasicButton>
          </LateralButtonFlow>
        </RoomSelectorDiv>
      )}
    </CenterColumnPage>
  );
}
