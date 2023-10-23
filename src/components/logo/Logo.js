import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={classes.svgHover}
    >
      {/* Circle */}
      <circle cx="100" cy="100" r="90" fill="#1d1d1b" />

      {/* Letter "C" */}
      <text x="50" y="120" fill="#fff" fontSize="80" fontWeight="bold">
        C
      </text>

      {/* Letter "B" */}
      <text x="100" y="120" fill="#fff" fontSize="80" fontWeight="bold">
        B
      </text>
    </svg>
  );
};
