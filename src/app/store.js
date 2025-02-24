import { formReducer } from "../features/auth/formSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        form: formReducer,
      },
})

export default store;