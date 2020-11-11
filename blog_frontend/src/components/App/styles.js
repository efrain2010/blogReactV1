import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@global": {
    a: {
      color: "#FFFFFF",
      textDecoration: "none",
    },
    section: {
      position: "relative",
    },
    ".text-red-v": {
      color: "#EC2B3D",
    },
    "nav a.active": {
      color: "#EC2B3D",
      textDecoration: "none",
    },
    main: {
      paddingTop: 55,
    },
  },
});

export default useStyles;
