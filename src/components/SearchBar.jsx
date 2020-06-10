import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';

import { IconButton, InputBase, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    display: 'flex',

    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    borderRadius: '50px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: theme.spacing(1),
    right: 0,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '50px',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    paddingRight: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    minWidth: '300px',
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset',
    },
  },
  searchContainer: {
    marginLeft: 'auto',
  },
}));

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const classes = useStyles();

  const handleChange = (event) => setSearchTerm(event.target.value);

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!!searchTerm.trim()) {
      onSubmit(searchTerm);
    }
  };

  return (
    <div className={classes.searchContainer}>
      <Paper elevation={6} className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
        <div className={classes.searchIcon}>
          <IconButton onClick={handleSubmit}>
            <SearchIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
