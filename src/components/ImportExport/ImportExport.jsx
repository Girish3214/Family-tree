import React, { useState } from "react";

import { Button, Grid } from "@mui/material";

import CustomPaper from "../../customComponents/CustomPaper";
import DialogForm from "./DialogForm";
import { addMemberToFamily } from "../../store/slices/familySlice";
import { useDispatch, useSelector } from "react-redux";
import { printPdf } from "../../store/functions/memberActions";
import PrintFamilyTree from "./PrintFamilyTree";

const initalValue = {
  name: "",
  spouse: "",
  location: "",
  yob: "",
  address: "",
  isParent: false,
};

const getUniqueId = () => {
  return Math.floor(
    new Date().getTime() +
      new Date().getMilliseconds() +
      new Date().getSeconds() +
      Math.random() +
      10
  );
};
const ImportExport = () => {
  const dispatch = useDispatch();
  const { familyDetails, selectedPerson } = useSelector(
    (state) => state.family
  );

  const [open, setOpen] = useState(false);
  const [newMember, setNewMember] = useState(initalValue);

  const handleAddNewMemberChange = (e, name, value) => {
    e.preventDefault();
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const addToFamily = () => {
    const newData = {
      id: getUniqueId(),
      ...newMember,
    };
    if (newMember.isParent) {
      newData.childrens = [];
    }
    dispatch(addMemberToFamily({ familyDetails, newMember: newData }));
    setOpen(false);
    setNewMember(initalValue);
  };
  return (
    <CustomPaper>
      <DialogForm
        open={open}
        newMember={newMember}
        addNewMember={(e, name, value) =>
          handleAddNewMemberChange(e, name, value)
        }
        handleClose={() => setOpen(false)}
        addAction={addToFamily}
      />
      <Grid container>
        <Grid item xs={12} margin={1}>
          <Button
            variant="outlined"
            style={{ padding: "8px", fontSize: 12, width: "100%" }}
            onClick={() => setOpen(true)}
            disabled={!selectedPerson?.isParent}
          >
            Add Family
          </Button>
        </Grid>

        <Grid item xs={12} margin={1}>
          <Button
            variant="contained"
            style={{ padding: "8px", fontSize: 12, width: "100%" }}
            onClick={() => printPdf(selectedPerson)}
            disabled={Object.keys(selectedPerson).length === 0}
          >
            Print Family Tree
          </Button>

          <div style={{ display: "none" }}>
            <PrintFamilyTree parent={selectedPerson} />
          </div>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default ImportExport;
