import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const CustomInput = ({ name, value, type, handleChange }) => {
  return (
    <>
      <FormHelperText id="dob">{name}</FormHelperText>
      <TextField
        margin="dense"
        id={name}
        type={type}
        name={name}
        fullWidth
        variant="outlined"
        value={value}
        onChange={(e) =>
          handleChange(
            e,
            type === "date" ? "yob" : name.toLowerCase(),
            e.target.value
          )
        }
      />
    </>
  );
};

export default CustomInput;
