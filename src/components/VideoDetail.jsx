import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: '100%' }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ padding: '15px' }}>
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="h6" gutterBottom>
          -by {video.snippet.channelTitle}
        </Typography>
        <Typography variant="body2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

VideoDetail.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoDetail;
