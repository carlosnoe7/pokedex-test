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
  imageTitle:{
    margin: "30px 0"
  },
  infoContainer: {
    width: "50%",
    display: "flex",
    height: "100%",
    flexWrap: "nowrap",
    rowGap: "15px",
    boxSizing: "border-box",
    overflowY:"scroll"
  },
  infoSubContainer:{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    paddingTop: "40px",
    boxSizing:"border-box"
  },
  title: {
    textTransform: "capitalize",
    textAlign: "center",
    alignSelf: "center",
    margin:"0"
  },
  li:{
    fontSize:"18px"
  },
  spritesContainer:{
    display:"flex",
    columnGap:"15px"
  }
});

export default useStyles;
