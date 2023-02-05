import { createSlice } from "@reduxjs/toolkit";
import familyDetailsJS from "../../FamilyData";
import { insertMember, searchNameInFamily } from "../functions/memberActions";

const familySlice = createSlice({
  name: "family",
  initialState: {
    selectedPerson: {},
    familyDetails: familyDetailsJS,
    searchedNames: [],
    searchSelectedPerson: {},
    isSearched: false,
  },
  reducers: {
    selectedPerson: (state, action) => {
      state.selectedPerson = action.payload;
    },

    addMemberToFamily: (state, action) => {
      const { selectedPerson, searchSelectedPerson } = state;
      const { familyDetails, newMember } = action.payload;

      // for iterating all the values to add where they belong (tree traversing)
      const newData = insertMember(familyDetails, selectedPerson, newMember);
      state.familyDetails = newData;
      state.searchSelectedPerson = state.isSearched
        ? newData
        : searchSelectedPerson;
    },

    searchPerson: (state, action) => {
      const { familyDetails } = state;
      const { payload } = action;
      let searchResult = [];

      state.searchedNames = searchNameInFamily(
        familyDetails,
        payload,
        searchResult
      );
    },

    clearSearchData: (state) => {
      state.searchedNames = [];
      state.searchSelectedPerson = {};
      state.isSearched = false;
    },

    searchSelectedPerson: (state, { payload }) => {
      const { searchedNames, selectedPerson, searchSelectedPerson } = state;
      console.log(payload);
      state.searchSelectedPerson = payload
        ? searchedNames.filter((search) => search.name === payload)[0]
        : Object.keys(searchSelectedPerson).length !== 0
        ? searchSelectedPerson
        : Object.keys(selectedPerson).length !== 0
        ? selectedPerson
        : familyDetailsJS;
      state.isSearched = true;
    },
  },
});

export const {
  selectedPerson,
  addMemberToFamily,
  searchPerson,
  clearSearchData,
  searchSelectedPerson,
} = familySlice.actions;

export { familySlice };
