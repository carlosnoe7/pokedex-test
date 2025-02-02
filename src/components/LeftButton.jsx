import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    width: "32px",
    height: "36px",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
  },
});

const LeftButton = ({ onClick = () => {} }) => {
  const classes=useStyles();
  return (
    <button className={classes.button} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-5"
      >
        <path
          fillRule="evenodd"
          d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default LeftButton;
