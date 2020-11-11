import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#565656",
    },
    secondary: {
      main: "#EC2B3D",
    },
  },
});

// Configuring H1 styles and breakpoints
darkTheme.typography.h1 = {
  // [darkTheme.breakpoints.down('sm')]: {
  fontSize: "4.5rem",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
  fontWeight: 300,
  lineHeight: 1.167,
  letterSpacing: "-0.01562em",
  // },
  // [darkTheme.breakpoints.down('xs')]: {
  //   fontSize: '2.8rem',
  // }
};
// Configuring H2 styles and breakpoints
darkTheme.typography.h2 = {
  // [darkTheme.breakpoints.down('sm')]: {
  fontSize: "3.75rem",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
  fontWeight: 300,
  lineHeight: 1.2,
  letterSpacing: "-0.00833em",
  // },
  // [darkTheme.breakpoints.down('xs')]: {
  //   fontSize: '2.5rem',
  // }
};

export { darkTheme };
