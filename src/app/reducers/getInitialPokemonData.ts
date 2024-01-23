import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoute } from "../../utils/constants";

// This is used to fetch the intial data from the Pokemon API
export const getInitialPokemonData = createAsyncThunk(
  "pokemon/initialData",
  async () => {
    try {
      const { data } = await axios.get(pokemonsRoute);
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);
