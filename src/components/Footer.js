import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedIn />} href="https://www.linkedin.com/in/phemia" className={classes.root} />
      <BottomNavigationAction icon={<Twitter />} href="https://www.twitter.com/AmpaPhem" className={classes.root} />
      <BottomNavigationAction icon={<GitHubIcon />} href="https://github.com/ampaire" className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
