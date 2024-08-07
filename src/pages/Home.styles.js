import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexWrap: "nowrap",
    boxSizing: "border-box",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    backgroundColor: "rgb(225,55,30)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "30px",
  },
  listContainer: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    flexWrap: "nowrap",
    rowGap: "15px",
    boxSizing: "border-box",
    alignItems: "center",
  },
  pokemonList: {
    display: "flex",
    flexWrap: "wrap",
    boxSizing: "border-box",
    width: "calc(90% - 10px)",
    justifyContent: "space-around",
    rowGap: "15px",
  },
  titleImage:{
    margin: "30px 0"
  }
});

export default useStyles;
