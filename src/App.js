import React, { useState } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { VideoDetail, VideoList, Header } from './components';
import youtube from './services/api/youtube';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    margin: theme.spacing(4, 0),
    width: '100%',
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
    },
    boxSizing: 'border-box',
  },

  msg: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(16),
    padding: theme.spacing(2),
  },
}));

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const classes = useStyles();

  const handleSubmit = async (searchTerm) => {
    setLoading(true);
    try {
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
    } catch (err) {
      setError(
        "Sorry, we've reached the free YouTube API daily limit :'(, please come back tomorrow"
      );
    }
    setLoading(false);
  };

  const videoContents = () => {
    return !selectedVideo || loading ? (
      <div className={classes.msg}>
        {!selectedVideo && !loading ? (
          <Typography variant="h5">
            Please use the search bar to search...
          </Typography>
        ) : (
          <CircularProgress color="secondary" size={50} />
        )}
      </div>
    ) : (
      <Grid container spacing={4} className={classes.contentContainer}>
        <Grid item md={8} xs={12}>
          <VideoDetail video={selectedVideo} />
        </Grid>

        <Grid item md={4} xs={12}>
          <VideoList />
        </Grid>
      </Grid>
    );
  };
  console.log(videos);
  return (
    <>
      <Header onSubmit={handleSubmit} />

      {error ? (
        <Typography variant="h6" color="secondary" className={classes.msg}>
          {error}
        </Typography>
      ) : (
        videoContents()
      )}
    </>
  );
}

export default App;
