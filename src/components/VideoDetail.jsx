import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iframeContainer: {
    height: '35vw',
    [theme.breakpoints.down('sm')]: {
      height: '50vw',
    },
  },

  details: {
    padding: '15px',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },

  detailsHeader: {
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    },
  },

  detailsChannelHeader: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      fontWeight: '500',
    },
  },
}));

const VideoDetail = ({ video }) => {
  const classes = useStyles();

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} className={classes.iframeContainer}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          allowFullScreen
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} className={classes.details}>
        <Typography variant="h5" className={classes.detailsHeader}>
          {video.snippet.title}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          className={classes.detailsChannelHeader}
        >
          - by {video.snippet.channelTitle}
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
