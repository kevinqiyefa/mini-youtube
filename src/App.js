import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VideoDetail, VideoList, Header } from './components';
import youtube from './services/api/youtube';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightgray',
    height: '100vh',
  },
}));

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const classes = useStyles();

  const handleSubmit = async (searchTerm) => {
    const {
      data: { items },
    } = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: process.env.REACT_APP_API_KEY,
        q: searchTerm,
      },
    });

    setVideos(items);
    setSelectedVideo(items[0]);
  };

  useEffect(() => {
    handleSubmit('javascript');
  }, []);

  return (
    <div className={classes.root}>
      <Header onSubmit={handleSubmit} />
      <Grid
        container
        spacing={3}
        style={{
          margin: 0,
          width: '100%',
        }}
      >
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
