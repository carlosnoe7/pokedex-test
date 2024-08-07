import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonSlice';


export default configureStore({
  reducer: {
    pokemon: pokemonReducer
  },
});