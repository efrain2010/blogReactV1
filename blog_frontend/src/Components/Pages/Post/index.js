import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

import hero from "../../../Assets/Images/code-background.jpg";
import efra from "../../../Assets/Images/efra.jpg";

const PostTemplate = (props) => {
  const classes = useStyles();

  const postDetail = props.postDetail;

  return (
    <article>
      <Container
        className={[classes.header, "background-image"].join(" ")}
        component="header"
        maxWidth="lg"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <Grid className="content" container>
          <Grid item xs>
            <Typography variant="h1">{postDetail.title}</Typography>
            <div className="author-container">
              <Typography variant="h3">Efrain Villanueva</Typography>
              <img src={efra} alt="post feature" />
            </div>
            <div className="meta">
              <p className="category">
                <a href="/category/food">Food</a>
              </p>
              <p className="date">
                <a href="/date/2019/04/16">{postDetail.published}</a>
              </p>
              <div className="tags">
                <p>
                  <a href="/tag/delicous">Delicous</a>
                </p>
                <p>
                  <a href="/tag/mexican">Mexican</a>
                </p>
                <p>
                  <a href="/tag/cool">Cool</a>
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container component="section" maxWidth="lg">
        <Grid className={classes.content} container spacing={2}>
          <Grid item xs>
            <div className="post-content">
              <h1>Heading H1</h1>
              <h2>Heading H2</h2>
              <h3>Heading H3</h3>
              <h4>Heading H4</h4>
              <h5>Heading H5</h5>
              <p>
                Cras dignissim, nunc eget egestas hendrerit, sem urna hendrerit
                risus, vel maximus nisl massa id augue. Integer eget nisi
                semper, eleifend nulla eu, accumsan purus. In hac habitasse
                platea dictumst. In tincidunt consectetur ullamcorper. Nulla sit
                amet turpis pretium, fringilla lectus ut, malesuada diam.
                Maecenas fermentum dui a egestas mattis. Suspendisse vitae
                sodales sem.
              </p>
              <p>
                <a
                  href="https://google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  This is a link
                </a>
              </p>
              <blockquote>
                Quote example: Vivamus tincidunt lacus tincidunt, feugiat dui
                nec, ornare mi. Suspendisse a ante neque. Nunc sollicitudin
                auctor elit, sed pretium urna rhoncus at.
              </blockquote>
              <hr />
              <ol>
                <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Uranus </li>
                <li>Neptune</li>
                <li>Pluto?</li>
              </ol>
              <p>
                Duis ultrices mollis eros sed scelerisque. Aenean erat dui,
                luctus ac pretium eu, posuere quis risus. Quisque luctus, turpis
                et finibus posuere, ante ligula vehicula lectus, vitae suscipit
                felis nulla quis eros.
              </p>
              <figure className="kg-card kg-image-card kg-card-hascaption">
                <img
                  src="https://partio.golem.io/content/images/2019/04/salome-watel-1073279-unsplash.jpg"
                  alt="example"
                />
                <figcaption>Mr Coffe</figcaption>
              </figure>
              <ul>
                <li>bread</li>
                <li>green cucumber</li>
                <li>red onion</li>
                <li>bacon</li>
                <li>cheese</li>
                <li>meat</li>
                <li>tomatoes</li>
                <li>lettuce</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Divider />
    </article>
  );
};

export default PostTemplate;
