import React from "react";
import Paper from "@mui/material/Paper";
const CustomPaper = ({ children }) => {
  return (
    <Paper
      elevation={4}
      component={"div"}
      sx={{
        border: "1px solid blue",
      }}
    >
      {children}
    </Paper>
  );
};

export default CustomPaper;
