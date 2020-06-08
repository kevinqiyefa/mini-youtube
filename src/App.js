import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VideoDetail, VideoList, SearchBar } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgray',
    height: '100vh',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        style={{
          margin: 0,
          width: '100%',
        }}
      >
        <Grid item xs={12}>
          <SearchBar onSubmit={() => {}} />
        </Grid>
        <Grid item xs={8}>
          <VideoDetail />
        </Grid>
        <Grid item xs={4}>
          <VideoList />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
