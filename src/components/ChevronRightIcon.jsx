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

const ChevronRightIcon = ({ onClick = () => {} }) => {
  const classes = useStyles();
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
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default ChevronRightIcon;
