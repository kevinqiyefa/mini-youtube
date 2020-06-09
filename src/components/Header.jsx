import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.logo}>
            Mini YouTube
          </Typography>
          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
