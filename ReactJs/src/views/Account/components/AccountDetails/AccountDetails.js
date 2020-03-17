import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import PhoneIphone from '@material-ui/icons/PhoneIphone';


import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Krishna',
    lastName: 'Manchikalapudi',
    email: 'Krishna.Manchikalapudi@gmail.com',
    phone: '',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const countries = [
    {
      isoAlphaCode2: 'US',
      isoAlphaCode3: 'USA',
      label: 'U.S.A',
      ccTld: '.us'
    },
    {
      isoAlphaCode2: 'IN',
      isoAlphaCode3: 'IND',
      label: 'India',
      ccTld: '.in'
    }
  ];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <form autoComplete="off" noValidate>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                InputProps={{
                  inputProps: { min: 10, max: 15 },
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIphone />
                    </InputAdornment>
                  )
                }}
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select Country"
                margin="dense"
                name="country"
                onChange={handleChange}
                required
                select
                // eslint-disable-next-line react/jsx-sort-props
                SelectProps={{ native: true }}
                value={values.countries}
                variant="outlined">
                {countries.map(option => (
                  <option
                    key={option.isoAlphaCode3}
                    value={option.isoAlphaCode3}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                disabled="true"
                value={values.email}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AlternateEmail />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" variant="contained">
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
