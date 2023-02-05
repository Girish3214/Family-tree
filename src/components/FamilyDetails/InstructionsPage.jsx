import { Paper, Typography, Divider } from "@mui/material";
import React from "react";
import CustomPaper from "../../customComponents/CustomPaper";

const InstructionsPage = () => {
  return (
    <CustomPaper>
      <Paper
        sx={{
          padding: 4,
          paddingTop: 2,
        }}
      >
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 2,
          }}
        >
          Instructions
        </Typography>
        <Divider />
        <Typography variant="subtitle1">
          1: Select one family member to enable print and add member options
        </Typography>
        <Typography variant="subtitle1">
          2: Selected member details are displayed in Family Details section
        </Typography>
        <Typography variant="subtitle1">
          3: Click on <span style={{ color: "red" }}>"Add Family"</span> button
          to add family member to the selected member
        </Typography>
        <Typography variant="subtitle1">
          4: To print the Family tree, Select any family member and click on
          <span style={{ color: "blue" }}>"Print Familt Tree"</span> button
        </Typography>
        <Typography variant="subtitle1">
          5: Search with any name and click on search icon or select from the
          dropdown to display details
        </Typography>
      </Paper>
    </CustomPaper>
  );
};

export default InstructionsPage;
