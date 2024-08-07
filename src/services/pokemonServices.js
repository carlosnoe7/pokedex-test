export const fetchPokemons = async ({ start = 0 }) => {
  let limit = 20;
  if (start + 20 > 151) {
    const difference = start + 20 - 151;
    limit = 20 - difference;
  }
  try {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${start}&limit=${limit}`
    );
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return null;
  }
};

export const fetchSingleData = async (url) => {
  try {
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
  } catch (error) {
    return null;
  }
};
