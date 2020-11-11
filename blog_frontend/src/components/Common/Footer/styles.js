import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#303030",
    paddingTop: 30,
    textAlign: "center",
    "& *": {
      fontSize: "1rem",
      fontWeight: "300",
      lineHeight: "1.2",
    },
  },
  logo: {
    maxWidth: 18,
  },
}));

export default useStyles;
