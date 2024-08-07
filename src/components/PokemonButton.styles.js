import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    border: "none",
    padding: "8px 30px",
    fontSize:"18px",
    borderRadius:"8px",
    backgroundColor:"#fff",
    width:"100%",
    cursor:"pointer",
    textTransform:"capitalize"
  },
  container:{
    width:"calc(40% - 10px)",
    boxSizing:"border-box",
    boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1);",
  },
  buttonActive:{
    backgroundColor:"#ffcc00"
  }
});

export default useStyles;
