import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies:null,
        trailerOfMovie : null,
    },
    reducers : {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload;
        },

        addTrailerOfMovie: (state,action) =>{
            state.trailerOfMovie = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerOfMovie} = movieSlice.actions;
export default movieSlice.reducer;