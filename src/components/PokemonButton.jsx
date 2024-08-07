import React from "react";
import useStyles from "./PokemonButton.styles";
import { fetchSingleData } from "../services/pokemonServices";
import { useDispatch } from "react-redux";
import { setActivePokemon } from "../reducers/pokemonSlice";
import { useNavigate } from "react-router-dom";

const PokemonButton = ({ label = "", url = "", isActive=false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handleGetData = async () => {
    const data = await fetchSingleData(url);
    dispatch(
      setActivePokemon({
        abilities: data.abilities,
        types: data.types,
        stats: data.stats,
        sprites: data?.sprites?.other?.dream_world.front_default,
        name:label
      })
    );
  };

  const handleDoubleClick=()=>{
    navigate(`/pokemon/${label}`);
  }

  return (
    <div className={classes.container}>
      <button
        onDoubleClick={handleDoubleClick}
        className={`${classes.button} ${isActive ? classes.buttonActive : ""}`}
        type="button"
        onClick={handleGetData}
      >
        {label}
      </button>
    </div>
  );
};

export default PokemonButton;
