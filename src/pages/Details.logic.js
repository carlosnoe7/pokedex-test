import { useEffect, useState } from "react";
import { fetchSingleData } from "../services/pokemonServices";
import { useNavigate, useParams } from "react-router-dom";

const DetailsLogic = () => {
  const [pokemonData, setPokemonData] = useState({});
  const navigate = useNavigate();
  const params = useParams();

  const fetchData = async () => {
    const res = await fetchSingleData(
      `https://pokeapi.co/api/v2/pokemon/${params?.id}`
    );
    if (!res) {
      navigate("/home");
      return;
    }
    setPokemonData({
      abilities: res.abilities,
      moves: res.moves.slice(0, 5),
      name: res.name,
      sprites: res?.sprites?.other?.dream_world.front_default,
      dreamWorldSprites: {
        front: res?.sprites.front_default,
        front_female: res?.sprites.front_female,
      },
      types: res?.types,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    pokemonData,
    navigate,
  };
};

export default DetailsLogic;
