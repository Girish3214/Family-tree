import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { List, ListItem } from "@mui/material";
import React from "react";

const PrintFamilyTree = ({ parent }) => {
  if (!parent?.isParent) {
    return (
      <div className="child" id={parent?.id}>
        <span>{"🗂️"}</span>
        <span>{parent?.name}</span>
      </div>
    );
  }
  return (
    <List id={parent?.id}>
      <div className="parent">
        {parent?.isParent ? <ExpandMore /> : <KeyboardArrowRightIcon />}
        <span>{parent?.isParent ? "📂" : "🗂️"}</span>
        <span>{parent?.name}</span>
      </div>
      {/* <div style={{ display: expanded ? "block" : "none", width: "100%" }}> */}
      {parent?.childrens.map((child, index) => (
        <ListItem key={index} className="lists">
          <List disablePadding>
            <PrintFamilyTree parent={child} />
          </List>
        </ListItem>
      ))}
      {/* </div> */}
    </List>
  );
};
export default PrintFamilyTree;
