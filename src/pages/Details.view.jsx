import React from "react";
import LeftButton from "../components/LeftButton";
import useStyles from "./Details.styles";
import DetailsLogic from "./Details.logic";

const DetailsView = () => {
  const { navigate, pokemonData } = DetailsLogic();
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <div className={classes.imageContainer}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png"
          className={classes.imageTitle}
          width={"400px"}
          alt="Pokemon title"
        />
        <img
          src={pokemonData.sprites}
          width={"150px"}
          height={"150px"}
          alt="Pokemon sprite"
        />
      </div>
      <div className={classes.infoContainer}>
        <LeftButton onClick={() => navigate("/home")} />
        <div className={classes.infoSubContainer}>
          <h2 className={classes.title}>{pokemonData.name}</h2>
          <h3>Types</h3>
          <ul>
            {pokemonData?.types?.map(({ type }, i) => (
              <li key={`${type.name}-${i}`}>{type.name}</li>
            ))}
          </ul>
          <h3>Abilities</h3>
          <ul>
            {pokemonData?.abilities?.map(({ ability }, i) => (
              <li className={classes.li} key={ability.name}>
                {ability.name}
              </li>
            ))}
          </ul>
          <h3>Moves</h3>
          <ul>
            {pokemonData?.moves?.map(({ move }, i) => (
              <li className={classes.li} key={move.name}>
                {move.name}
              </li>
            ))}
          </ul>
          <h3>Sprites</h3>
          <div className={classes.spritesContainer}>
            {Object.values(pokemonData?.dreamWorldSprites || {}).map(
              (value, i) => {
                return value ? (
                  <img src={value} key={`sprite-${i}`} alt="Front sprite" />
                ) : null;
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsView;
