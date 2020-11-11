import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'rgba(38, 38, 38, 0.8)',
    // bottom: 0,
    // left: 0,
    // position: 'fixed',
    // right: 0,
    // textAlign: 'center',
    // top: 0,
    // width: "100%",
    // zIndex: 999,
    "& ul": {
      margin: 0,
      padding: 0,
    },
    "& li": {
      display: "inline",
      padding: theme.spacing(),
    },
    "& a": {
      fontSize: 14,
      fontWeight: "bold",
    },
    "& a:hover": {
      color: theme.palette.secondary.main,
    },
  },
  button: {
    marginRight: "10px !important",
  },
}));

export default useStyles;
