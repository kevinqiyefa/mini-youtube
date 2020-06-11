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
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  logo: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  mobileToolBar: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
}));

const Header = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar className={classes.mobileToolBar}>
          <IconButton edge="start" color="inherit" aria-label="logo">
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6" className={classes.logo}>
            Mini YouTube
          </Typography>
          <SearchBar onSubmit={onSubmit} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Header;
