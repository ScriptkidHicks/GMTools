"use client";
import { CenterColumnPage } from "@/Components/DivComponents/MainDivs";
import { RoomSelectorDiv } from "@/Components/DivComponents/InputDivs";
import { SelectorAutoComplete } from "@/Components/Inputs/MainInputs";
import { InitiativeOptions } from "@/Components/ClientData/Options";
import TextField from "@mui/material/TextField";
import { FormLabel } from "@mui/material";

export default function Home() {
  return (
    <CenterColumnPage>
      <RoomSelectorDiv>
        <FormLabel>Create A Room</FormLabel>
        <SelectorAutoComplete
          disablePortal
          options={InitiativeOptions}
          renderInput={(params) => <TextField {...params} label="System" />}
        ></SelectorAutoComplete>
        <TextField label="Room Name"></TextField>
      </RoomSelectorDiv>
    </CenterColumnPage>
  );
}
