import React from "react";
import { Card, CardContent, CardHeader, Divider } from "@mui/material";

import "../../assets/styles/familyTree.css";
import CustomPaper from "../../customComponents/CustomPaper";
import FamilyTreeRoot from "./FamilyTreeRoot";
import familyDetailsJS from "../../FamilyData";
import Search from "./Search";
import { useSelector } from "react-redux";

const FamilyTree = () => {
  const { familyDetails, searchedNames, searchSelectedPerson } = useSelector(
    (state) => state.family
  );
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
            color: (theme) => theme.palette.text.primary,
          }}
          title="Family Details"
          classes={{ root: "flexCenter" }}
        />
        <Divider />
        <CardContent className="family_tree_container" style={{ padding: 5 }}>
          <Search />
        </CardContent>
        <CardContent
          className="family_tree_container"
          style={{ padding: 5, minHeight: "16rem", maxHeight: "16rem" }}
        >
          <FamilyTreeRoot
            parent={
              searchedNames.length === 0 ? familyDetails : searchSelectedPerson
            }
          />
        </CardContent>
      </Card>
    </CustomPaper>
  );
};

export default FamilyTree;
