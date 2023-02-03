import { createSlice } from "@reduxjs/toolkit";
import familyDetailsJS from "../../FamilyData";

const insertMember = (familyDetails, selectedPerson, newMember) => {
  if (selectedPerson?.id === familyDetails?.id && familyDetails?.isParent) {
    const data = [newMember, ...familyDetails.childrens];
    return { ...familyDetails, childrens: data };
  }

  let newData = [];
  newData = familyDetails.childrens.map((data) => {
    if (!data.isParent) return data;
    return insertMember(data, selectedPerson, newMember);
  });

  return { ...familyDetails, childrens: newData };
};

const familySlice = createSlice({
  name: "family",
  initialState: {
    selectedPerson: null,
    familyDetails: familyDetailsJS,
  },
  reducers: {
    selectedPerson: (state, action) => {
      state.selectedPerson = action.payload;
    },

    addMemberToFamily: (state, action) => {
      const { selectedPerson } = state;
      const { familyDetails, newMember } = action.payload;

      // for iterating all the values to add where they belong (tree traversing)
      state.familyDetails = insertMember(
        familyDetails,
        selectedPerson,
        newMember
      );
    },
  },
});

export const { selectedPerson, familyDetails, addMemberToFamily } =
  familySlice.actions;

export { familySlice };
