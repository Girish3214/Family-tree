import { FormHelperText, TextField } from "@mui/material";
import React from "react";

const CustomInput = ({ name, value, type, handleChange }) => {
  return (
    <>
      <FormHelperText id="dob">{name}</FormHelperText>
      <TextField
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
        sx={{
          marginBottom: 2,
        }}
      />
    </>
  );
};

export default CustomInput;
