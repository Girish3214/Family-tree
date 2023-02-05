import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";

import { useSelector } from "react-redux";

import photo from "../../assets/images/react.svg";
import "../../assets/styles/familyDetails.css";

import CustomPaper from "../../customComponents/CustomPaper";
import CustomTypeWithLabel from "../../customComponents/CustomTypeWithLabel";

const FamilyDetails = () => {
  const { selectedPerson } = useSelector((state) => state.family);
  return (
    <CustomPaper>
      <Card
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <CardHeader
          sx={{
            backgroundColor: (theme) => theme.palette.primary.light,
            color: "white",
          }}
          title="Family Details"
          classes={{ root: "flexCenter" }}
        />
        <Divider />
        <CardContent>
          <CustomTypeWithLabel
            label={"Name"}
            value={selectedPerson?.name ?? "NA"}
          />
          <CustomTypeWithLabel
            label={"Spouse"}
            value={selectedPerson?.spouse ?? "NA"}
          />
          <CustomTypeWithLabel
            label={"Location"}
            value={selectedPerson?.location ?? "NA"}
          />
          <CustomTypeWithLabel
            label={"Birth Year"}
            value={selectedPerson?.yob ?? "NA"}
          />
          <CustomTypeWithLabel
            label={"Present Address"}
            value={selectedPerson?.address ?? "NA"}
          />
          <CustomTypeWithLabel
            label={"Family Photo"}
            value={[photo, photo]}
            type="photo"
          />
        </CardContent>
      </Card>
    </CustomPaper>
  );
};

export default FamilyDetails;
