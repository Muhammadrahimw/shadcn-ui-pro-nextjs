import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface colorSliceType {
	color: string;
}

const initialState: colorSliceType = {
	color: "gray",
};

const colorSlice = createSlice({
	name: "colorSlice",
	initialState,
	reducers: {
		updateColor: (state, action: PayloadAction<string>) => {
			state.color = action.payload;
			localStorage.setItem("baseColor", action.payload);
		},
	},
});

export const {updateColor} = colorSlice.actions;
export default colorSlice.reducer;
