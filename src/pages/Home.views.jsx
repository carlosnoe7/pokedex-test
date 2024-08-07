import React from "react";
import { useSelector } from "react-redux";
import NoPokemonSelected from "../components/NoPokemonSelected";
import PokemonButton from "../components/PokemonButton";
import ChevronRightIcon from "../components/ChevronRightIcon";
import ChevronLeftButton from "../components/ChevronLeftButton";
import HomeLogic from "./Home.logic";
import useStyles from "./Home.styles";

const HomeView = () => {
  const { handleNextPage, handlePreviousPage } = HomeLogic();
  const pokemonsList = useSelector((state) => state.pokemon.pokemons);
  const pagination = useSelector((state) => state.pokemon.pagination);
  const selectedPokemon = useSelector((state) => state.pokemon.pokemonSelected);
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png"
          className={classes.titleImage}
          width={"400px"}
          alt="Pokemon title"
        />
        {Object.keys(selectedPokemon).length > 0 ? (
          <img
            src={selectedPokemon.sprites}
            width={"150px"}
            height={"150px"}
            alt="Pokemon sprite"
          />
        ) : (
          <NoPokemonSelected />
        )}
      </div>
      <div className={classes.listContainer}>
        {pagination.start > 0 ? (
          <ChevronLeftButton
            onClick={() => handlePreviousPage({ start: pagination.start })}
          />
        ) : (
          <div style={{ width: "32px", height: "5px" }}></div>
        )}
        <div className={classes.pokemonList}>
          {pokemonsList.map((pokemon) => (
            <PokemonButton
              key={pokemon.name}
              label={pokemon.name}
              url={pokemon.url}
              isActive={selectedPokemon?.name === pokemon.name}
            />
          ))}
        </div>
        {pagination.start + 20 < pagination.totalCount && (
          <ChevronRightIcon
            onClick={() => handleNextPage({ start: pagination.start })}
          />
        )}
      </div>
    </section>
  );
};

export default HomeView;
