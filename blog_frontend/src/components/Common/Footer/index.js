import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import useStyles from "./styles";

import logo from "../../../assets/images/logo.png";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container maxWidth={false}>
        <Grid container justify="center">
          <Grid item xs>
            <img className={classes.logo} src={logo} alt="Logo" />
            <Typography variant="h2">
              Created with <span className="text-red-v">❤</span> by Efrain
              Villanueva
            </Typography>
            <IconButton href="tel:+4407949782401" aria-label="email">
              <MailOutlineIcon />
            </IconButton>
            <IconButton
              href="mailto:efrain.villanueva3@gmail.com"
              aria-label="mobile phone"
            >
              <PhoneEnabledIcon />
            </IconButton>
            <IconButton
              href="https://github.com/efrain2010"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/efrain-villanueva/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/efraintenso/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
