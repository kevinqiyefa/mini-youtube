import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { VideoItem } from '.';

const VideoList = ({ videos }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} />
  ));
  return (
    <Grid container style={{ width: '100%', margin: 0 }}>
      {listOfVideos}
    </Grid>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList;
