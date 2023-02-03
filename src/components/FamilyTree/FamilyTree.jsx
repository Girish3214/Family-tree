import React from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";

import "../../assets/styles/familyTree.css";
import CustomPaper from "../../customComponents/CustomPaper";
import FamilyTreeRoot from "./FamilyTreeRoot";
import familyDetailsJS from "../../FamilyData";
import Search from "./Search";
import { useSelector } from "react-redux";

const FamilyTree = () => {
  const familyDetails = useSelector((state) => state.family.familyDetails);
  return (
    <CustomPaper>
      <Card>
        <CardHeader title="Family Tree" classes={{ root: "flexCenter" }} />
        <Divider />
        <CardContent className="family_tree_container" style={{ padding: 5 }}>
          <Search />
        </CardContent>
        <CardContent
          className="family_tree_container"
          style={{ padding: 5, minHeight: "17rem", maxHeight: "17rem" }}
        >
          <FamilyTreeRoot parent={familyDetails} />
        </CardContent>
      </Card>
    </CustomPaper>
  );
};

export default FamilyTree;
