import { useEffect } from "react";
import { fetchPokemons } from "../services/pokemonServices";
import { useDispatch } from "react-redux";
import { setPagination, setPokemons } from "../reducers/pokemonSlice";

function HomeLogic() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemons({ start: 0 });
      dispatch(setPokemons([...data.results]));
    };
    fetchData();
  }, []);

  const handleNextPage = async ({ start = 0 }) => {
    const data = await fetchPokemons({ start: start + 20 });
    dispatch(setPokemons([...data.results]));
    dispatch(setPagination(start + 20));
  };

  const handlePreviousPage = async ({ start = 0 }) => {
    const data = await fetchPokemons({ start: start - 20 });
    dispatch(setPokemons([...data.results]));
    dispatch(setPagination(start - 20));
  };

  return {
    data: [],
    handleNextPage,
    handlePreviousPage
  };
}

export default HomeLogic;
