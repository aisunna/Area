import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    current: "light"
}

export const themeSlice = createSlice({

    name: "theme",
    initialState,

    reducers: {
        setTheme: (state) => {
            state.current == "light" ? state.current = "dark" : state.current = "light"
        }
    }

})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer