import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  videoItemContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '20px',
  },

  videoItemImg: {
    width: '100%',
    display: 'flex',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  videoItemText: {
    marginLeft: '16px',
    marginRight: '16px',
    fontSize: '0.875rem',
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: '0.75rem',
    },
  },
}));

const VideoItem = ({ video }) => {
  const classes = useStyles();

  const truncateStr = (str) => {
    if (str.length > 40) {
      return str.slice(0, 40) + '...';
    }

    return str;
  };
  return (
    <Grid
      component={Paper}
      container
      className={classes.videoItemContainer}
      onClick={() => {}}
    >
      <Grid item xs={7}>
        <img
          className={classes.videoItemImg}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
      </Grid>

      <Grid item xs={5}>
        <Typography variant="subtitle2" className={classes.videoItemText}>
          <b>{truncateStr(video.snippet.title)}</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
