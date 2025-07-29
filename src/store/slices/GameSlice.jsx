import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
     cartas: [],
     carta1: {},
     carta2: {},
    
  },
  reducers: {
    startLoadingCard: (state, /* action */ ) => {
       state.isLoading=true
    },
    setRandomCard1:(state,action) =>{
        state.isLoading=false;
        state.carta1=action.payload;
       
    },
   
  }
});
export const { 
  startLoadingCard,
  setRandomCard1,
 } = gameSlice.actions;