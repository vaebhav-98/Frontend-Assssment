import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk('fetchMovies', async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=spiderman');
    const result = await response.json();
    return result;
});

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        isLoading: false,
        isError: false,
        data: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchMovies.rejected, (state, action) => {
            console.log(action.payload);
            state.isError = true;
        })
    }
});

export default movieSlice.reducer;