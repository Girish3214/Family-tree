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
      const { selectedPerson } = state;
      const { familyDetails, newMember } = action.payload;

      // for iterating all the values to add where they belong (tree traversing)
      state.familyDetails = insertMember(
        familyDetails,
        selectedPerson,
        newMember
      );
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
      state.searchSelectedPerson = payload
        ? searchedNames.filter((search) => search.name === payload)[0]
        : searchSelectedPerson
        ? searchSelectedPerson
        : selectedPerson
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
