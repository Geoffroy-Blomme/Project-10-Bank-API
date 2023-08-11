import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateProfile } from "../services/ApiCalls";

export const updateProfilePut = createAsyncThunk(
  "UpdateProfile/Update",
  async (data) => {
    console.log(data);
    const { firstNameInput, lastNameInput, token } = data;
    return updateProfile(firstNameInput, lastNameInput, token);
  }
);

export const UpdateProfileSlice = createSlice({
  name: "updateProfile",
  initialState: {
    data: { firstName: null, lastName: null, token: null },
    loading: "idle",
    errror: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      (updateProfilePut.rejected = (state) => {
        if (state.loading === "pending") {
          return {
            ...state,
            error: "Error occured",
            loading: "idle",
          };
        }
      })
    );
    builder.addCase(
      (updateProfilePut.pending = (state) => {
        if (state.loading === "idle") {
          state.loading = "pending";
        }
      })
    );
    builder.addCase(
      (updateProfilePut.fulfilled = (state, action) => {
        console.log(action.payload);

        if (state.loading === "pending") {
          console.log(action.payload);
          return {
            ...state,
            data: action.payload.data.body,
            error: "",
          };
        }
      })
    );
  },
});

// const { actions, reducer } = UpdateProfileSlice;
// export const { logout } = actions;
// export default reducer;
