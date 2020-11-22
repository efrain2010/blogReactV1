import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 0,
    "& .content": {
      minHeight: "27.5rem",
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      position: "relative",
      "& h1": {
        fontSize: "2rem",
        fontWeight: 500,
      },
      "& h3": {
        fontSize: "1rem",
        padding: `${theme.spacing(2)}px 0`,
      },
      "& img": {
        borderRadius: "50%",
        height: 65,
        objectFit: "cover",
        width: 65,
      },
      "& .author-container": {
        marginBottom: "10rem",
      },
      "& .meta": {
        bottom: 0,
        marginBottom: theme.spacing(4),
        position: "absolute",
        "& p": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 4,
          display: "inline-block",
          marginBottom: 0,
          marginRight: theme.spacing(2),
          padding: "4px 12px",
          "&.category": {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
      "& .tags": {
        "& p": {
          display: "inline-block",
          marginRight: theme.spacing(1),
          "& a:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
  content: {
    "& .post-content": {
      margin: `${theme.spacing(6)}px 0`,
    },
    "& h1, h2, h3, h4, h5": {
      marginBottom: theme.spacing(2),
      marginTop: 0,
    },
    "& h1, h2": {
      fontSize: "1.5rem",
    },
    "& h3, h4": {
      fontSize: "1.2rem",
    },
    "& h5": {
      fontSize: "1.1rem",
    },
    "& p": {
      fontSize: "1rem",
      "& a:hover": {
        fontWeight: "bold",
        textDecoration: "underline",
        textDecorationColor: theme.palette.secondary.main,
      },
    },
    "& figure": {
      margin: 0,
      "& figcaption": {
        fontSize: "0.9rem",
        fontStyle: "italic",
        textAlign: "center",
      },
    },
  },
}));

export default useStyles;
