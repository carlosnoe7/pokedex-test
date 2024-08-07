import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokedex',
  initialState: {
    pokemons:[],
    pokemonSelected:{},
    pagination:{
      start:0,
      totalCount:151
    }
  },
  reducers: {
    setPokemons: (state,action)=>{
      state.pokemons=action.payload;
    },
    setActivePokemon: (state,action)=>{
      state.pokemonSelected=action.payload
    },
    setPagination:(state,action)=>{
      state.pagination={...state.pagination,start:action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPokemons, setActivePokemon, setPagination } = pokemonSlice.actions

export default pokemonSlice.reducer