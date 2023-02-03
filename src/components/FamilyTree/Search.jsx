import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <TextField
        placeholder="Search..."
        id="filled-start-adornment"
        value={searchValue}
        onChange={(e) => handleSearch(e)}
        sx={{ m: 1, width: "25ch" }}
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default Search;
