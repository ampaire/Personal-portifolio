import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/rails-lg.png";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/rails-logo.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    height:"60vh",
  },
  bottom: {
    textAlign: "center"
  },
  image: {
    width: 100
  }
}));

const projects = [
  {
    name: "CSS components and Grid Framework",
    description: `This is a collaborative project, where the requirement\
      was to create a grid framework and then use it to make a clone of a\
      web page of our own choice.We created the grid framework and then\
      used it to make a clone of the Netflix landing page.`,
    image: project1,
    github: `https://github.com/ampaire/css-grids`,
    demo: `https://raw.githack.com/ampaire/css-grids/master/index.html`,
  },
  {
    name: "Weather App",
    description: `Weather Application developed using HTML, CSS, Weather\
                  API, and JavaScript. The application can be used to\
                  determine the weather of any city in the world. A user\
                  is able to see the temperature in °C or °F.The image in`,
    image: project2,
    github: `https://github.com/ampaire/weather-app`,
    demo: `https://rawcdn.githack.com/ampaire/weather-app/7a6d585b71809de16913bcff25cbf0c53a53fcc7/dist/index.html`,
  },
  {
    name: "Ultimate Ninja (RPG game)",
    description: `About
    Ultimate Ninja is a role-playing game commonly known as an RPG game.\
    The game has been implemented in JavaScript with PhaserJS.`,
    image: project3,
    demo: `https://affectionate-joliot-463312.netlify.app/`,
    github: `https://github.com/ampaire/Ultimate-Ninja`,
  },
  {
    name: "Daily Blogger",
    description: `Daily Blogger is a Ruby on Rails chat simple\
    Web Application. Users can create an account, create or join\
    a chat group and start chatting with your people `,
    image: project4,
    demo: `https://dailyblogger.herokuapp.com/users/sign_in`,
    github: `https://github.com/ampaire/DailyBlogger`,
  },
  {
    name: "React Calculator App",
    description: `About
    A user-friendly and fully functional mathematics calculator\
    that can be used for calculations. This project is built with\
    ReactJS.`,
    image: project5,
    demo: `https://magic-calculator.netlify.app/`,
    demo: `https://github.com/ampaire/react-calculator`,
  },
  {
    name: "Beautiful-tags",
    description: `In this project, I created my own rails api and\
    later integrated it into a React Js project to form Beautiful\
    Tags. Beautiful Tags is an online store for ladies items like\
    clothes, shoes and handbags.`,
    image: project6,
    demo: `https://beautiful-tags.netlify.app/`,
    demo: `https://github.com/ampaire/Beautiful-Tags`,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.bottem}>
              <Button size="small" href= {project.github} color="primary">
                  GitHub
                </Button>
                <Button size="small" href= {project.demo} color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
