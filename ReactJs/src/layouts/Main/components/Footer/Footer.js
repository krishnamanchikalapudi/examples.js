import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Footer = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const cDate = new Date();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Typography variant="body1">
      
        <Link
          component="a"
          href="https://www.linkedin.com/in/krishnamanchikalapudi/"
          target="_blank"
        >
          Krishna Manchikalapudi
        </Link> &copy;{' '}
         {cDate.toDateString()}
      </Typography>
      <Typography variant="caption">
        Created with love for the technology!
      </Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
