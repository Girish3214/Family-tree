import React, { useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import {
  Alert,
  Autocomplete,
  ClickAwayListener,
  IconButton,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchData,
  searchPerson,
  searchSelectedPerson,
} from "../../store/slices/familySlice";
import { Stack } from "@mui/system";

const Search = () => {
  const dispatch = useDispatch();

  const { searchedNames } = useSelector((state) => state.family);
  const [searchValue, setSearchValue] = useState("");
  const [searchedArray, setSearchedArray] = useState(searchedNames);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSearch = (e) => {
    dispatch(searchPerson(searchValue));
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchPerson(e.target.value));
    if (e.target.value === "") {
      setSearchedArray([]);
      dispatch(clearSearchData());
    }
  };

  const searchSelected = (newValue) => {
    setSearchValue(newValue);
    dispatch(searchSelectedPerson(newValue));
  };

  useEffect(() => {
    setSearchedArray(searchedNames);
    return () => {};
  }, [searchedNames]);

  return (
    <div>
      <Stack>
        <Snackbar
          open={alertOpen}
          autoHideDuration={3000}
          onClose={() => setAlertOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Alert
            onClose={() => setAlertOpen(false)}
            severity="error"
            sx={{ width: "100%" }}
            variant="filled"
          >
            No Data Found. Try with different search value
          </Alert>
        </Snackbar>
      </Stack>

      <>
        <Autocomplete
          freeSolo
          id="Search"
          disableClearable
          options={searchedArray.map((option) => option.name)}
          onChange={(_, newValue) => searchSelected(newValue)}
          onBlur={() => dispatch(searchSelectedPerson(null))}
          // onInputChange={(_, newValue) => searchSelected(newValue)}
          renderInput={(params) => (
            <TextField
              placeholder="Search..."
              id="Search"
              value={searchValue}
              onChange={(e) => handleChange(e)}
              sx={{ m: 1, width: "93%" }}
              size="small"
              {...params}
              InputProps={{
                ...params.InputProps,
                type: "search",
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      type="button"
                      sx={{ p: "10px" }}
                      aria-label="search"
                      disabled={searchValue.length === 0}
                      onClick={
                        searchedArray.length === 0
                          ? () => setAlertOpen(true)
                          : (e) => handleSearch(e)
                      }
                    >
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </>
    </div>
  );
};

export default Search;
