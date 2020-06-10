import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VideoDetail, VideoList, Header } from './components';
import youtube from './services/api/youtube';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: theme.spacing(4, 0, 0, 0),
    width: '100%',
    padding: theme.spacing(0, 4),
  },

  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(16),
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
        maxResults: 6,
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
  console.log(videos);
  return (
    <>
      <Header onSubmit={handleSubmit} />

      {!selectedVideo ? (
        <div className={classes.loader}>
          <CircularProgress color="secondary" size={50} />
        </div>
      ) : (
        <Grid container spacing={4} className={classes.contentContainer}>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default App;
