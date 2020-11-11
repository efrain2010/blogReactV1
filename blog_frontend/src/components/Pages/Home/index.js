import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Skeleton from "@material-ui/lab/Skeleton";

import hero from "../../../assets/images/code-background.jpg";
import useStyles from "./styles";

const Blog = () => {
  const [loadingState, setLoadingState] = useState(true);
  const [entriesState, setEntriesState] = useState([...Array(7)].map((x) => 0));

  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      const tempEntries = [...Array(19)].map((x, index) => {
        return {
          title: `Example of a title ${index + 1}`,
          author: `Example of an author ${index + 1}`,
          image: `url(${hero})`,
        };
      });

      setEntriesState(tempEntries);
      setLoadingState(false);
    }, 3000);
  }, []);

  const EntriesTemplate = () => {
    let cont = 0;
    const entries = entriesState;

    return entries.map((entry, index) => {
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
          {loadingState ? (
            <Skeleton
              animation="wave"
              variant="rect"
              width="100%"
              height={280}
            />
          ) : (
            <div
              className="entry"
              style={{
                backgroundImage: entry.image,
              }}
            >
              <h2>{entry.title}</h2>
              <h3>{entry.author}</h3>
            </div>
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
          <EntriesTemplate />
        </Grid>
      </Container>
    </section>
  );
};

export default Blog;
