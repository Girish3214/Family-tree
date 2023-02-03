import { configureStore } from "@reduxjs/toolkit";

import { familySlice } from "./slices/familySlice";

export const store = configureStore({
  reducer: {
    family: familySlice.reducer,
  },
});
