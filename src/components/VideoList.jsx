import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { v1 as uuidv1 } from 'uuid';

import { VideoItem } from '.';

const useStyles = makeStyles((theme) => ({
  videoList: {
    maxHeight: '80vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    // marginTop: '16px',
    // paddingTop: 0,
    width: '100%',
    margin: 0,
  },
}));
const VideoList = ({ videos, onVideoSelect }) => {
  const classes = useStyles();

  const listOfVideos = videos.map((video) => (
    <VideoItem key={uuidv1()} video={video} onVideoSelect={onVideoSelect} />
  ));
  return (
    <Grid container className={classes.videoList}>
      {listOfVideos}
    </Grid>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
  onVideoSelect: PropTypes.func.isRequired,
};

export default React.memo(VideoList);
