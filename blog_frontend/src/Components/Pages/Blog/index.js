import React from "react";
import { NavLink } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import hero from "../../../Assets/Images/code-background.jpg";

import useStyles from "./styles";

const BlogComponent = (props) => {
  const classes = useStyles();

  const EntriesTemplate = ({ entries }) => {
    let cont = 0;
    const entriesList =
      entries.length === 0 ? [...Array(7)].map((x) => 0) : [...entries];

    return entriesList.map((entry, index) => {
      let cols = 12;

      if (cont === 0) {
        cols = 12;
      } else if (cont < 2 || cont > 5) {
        cols = 6;
      } else {
        cols = 3;
      }

      if (cont === 7) {
        cont = 1;
      }

      cont += 1;

      return (
        <Grid key={`home-post-${index}`} item xs={cols}>
          {entries.length === 0 ? (
            <Skeleton
              animation="wave"
              variant="rect"
              width="100%"
              height={280}
            />
          ) : (
            <NavLink exact to={`/post/${entry.slug}`}>
              <div
                className="entry"
                style={{
                  backgroundImage:
                    entry.image === undefined || entry.image === ""
                      ? `url(${hero})`
                      : `url(${entry.image})`,
                }}
              >
                <h2>{entry.title}</h2>
                <h3>{entry.content}</h3>
              </div>
            </NavLink>
          )}
        </Grid>
      );
    });
  };

  return (
    <section className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs>
            <h2>Blog</h2>
          </Grid>
          <EntriesTemplate entries={props.entries} />
        </Grid>
      </Container>
    </section>
  );
};

export default BlogComponent;
