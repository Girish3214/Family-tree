import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CustomInput from "../../customComponents/CustomInput";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const DialogForm = ({
  open,
  handleClose,
  newMember,
  addNewMember,
  addAction,
}) => {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth={"sm"} fullWidth>
        <DialogTitle>Add Family Member</DialogTitle>
        <DialogContent>
          <CustomInput
            type={"text"}
            name="Name"
            value={newMember.name}
            handleChange={addNewMember}
          />
          <CustomInput
            type={"text"}
            name="Spouse"
            value={newMember.spouse}
            handleChange={addNewMember}
          />
          <CustomInput
            type={"text"}
            name="Location"
            value={newMember.location}
            handleChange={addNewMember}
          />
          <CustomInput
            type={"date"}
            name="Birth Year"
            value={newMember.yob}
            handleChange={addNewMember}
          />
          <CustomInput
            type={"text"}
            name="Address"
            value={newMember.address}
            handleChange={addNewMember}
          />
          <FormGroup>
            <FormControlLabel
              labelPlacement="top"
              control={
                <Switch
                  checked={newMember.isParent}
                  onChange={(e) =>
                    addNewMember(e, "isParent", e.target.checked)
                  }
                  name="isParent"
                />
              }
              label="Is Parent or Not"
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              color: (theme) => theme.palette.error.main,
            }}
            onClick={handleClose}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button onClick={addAction} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogForm;
