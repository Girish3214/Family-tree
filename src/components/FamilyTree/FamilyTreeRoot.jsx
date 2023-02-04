import React from "react";

import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch } from "react-redux";
import { selectedPerson } from "../../store/slices/familySlice";

const FamilyTreeRoot = ({ parent }) => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpand = (e, selected, isChild) => {
    e.stopPropagation();
    !isChild && setExpanded(!expanded);
    dispatch(selectedPerson({ ...selected }));
  };
  const truncate = (name) =>
    name?.length > 18 ? name?.substring(0, 18) + "..." : name;

  if (!parent?.isParent) {
    return (
      <div className="child" onClick={(e) => handleExpand(e, parent, true)}>
        <span>{expanded ? "📂" : "🗂️"}</span>
        <span>{truncate(parent?.name)}</span>
      </div>
    );
  }
  return (
    <List>
      <div className="parent" onClick={(e) => handleExpand(e, parent)}>
        {parent.isParent && expanded ? (
          <ExpandMore />
        ) : (
          <KeyboardArrowRightIcon />
        )}
        <span>{expanded ? "📂" : "🗂️"}</span>
        <span>{truncate(parent.name)}</span>
      </div>
      <div style={{ display: expanded ? "block" : "none", width: "100%" }}>
        {parent.childrens.map((child, index) => (
          <ListItem key={index} className="lists">
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <List disablePadding>
                <FamilyTreeRoot parent={child} />
              </List>
            </Collapse>
          </ListItem>
        ))}
      </div>
    </List>
  );
};

export default FamilyTreeRoot;
