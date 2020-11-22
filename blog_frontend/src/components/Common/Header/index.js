import React, { useState, useEffect, createRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

import Links from "../Links";

import useStyles from "./styles";
import logo from "../../../Assets/Images/logo.png";

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const Header = (props) => {
  const classes = useStyles();
  const [headerClasses, setHeaderClasses] = useState([classes.root]);
  const [headerRef] = useState(createRef());

  useEffect(() => {
    const logit = () => {
      const tempClasses = [...headerClasses];
      const headerRect = headerRef.current.getBoundingClientRect();

      if (window.pageYOffset >= headerRect.height) {
        if (!tempClasses.includes(classes.scrolled))
          tempClasses.push(classes.scrolled);
      } else {
        const classIndex = tempClasses.indexOf(classes.scrolled);
        if (classIndex !== -1) tempClasses.splice(classIndex, 1);
      }
      setHeaderClasses(tempClasses);
    };

    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [classes, headerClasses, headerRef]);

  return (
    <HideOnScroll {...props}>
      <header className={headerClasses.join(" ")} ref={headerRef}>
        <Container maxWidth={false}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs={2}>
              <NavLink className={classes.logo} exact to="/">
                <img src={logo} alt="Logo" />
              </NavLink>
            </Grid>
            <Grid item xs={10}>
              <Grid container justify="flex-end" spacing={3}>
                <Links className={classes.nav} type="hidden" />
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </header>
    </HideOnScroll>
  );
};

export default Header;
