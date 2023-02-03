import React from "react";
import Paper from "@mui/material/Paper";
const CustomPaper = ({ children }) => {
  return <Paper component={"div"}>{children}</Paper>;
};

export default CustomPaper;
