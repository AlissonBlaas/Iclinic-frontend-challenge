import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useUser } from '../../hooks/user';

import Button from '../../components/Button';

import useStyles from './styles';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles();
  const { fetchUserInfo } = useUser();
  const history = useNavigate();

  const goToProfile = useCallback(() => {
    fetchUserInfo(4);
    fetchUserInfo(1);
    history('/user-profile');
  }, [fetchUserInfo, history]);

  return (
    <Box className={classes.container}>
      <Box>
        <Typography fontSize={72} color="primary">
          Welcome to
          <span className={classes.companyName}>iClinic</span>
        </Typography>
        <Typography color="primary" className={classes.subtitle}>
          FRONTEND CHALLENGE
        </Typography>
      </Box>
      <Button
        textColor="white"
        width={189}
        background={theme.palette.primary.main}
        title="START"
        onClick={goToProfile}
      />
    </Box>
  );
};
export default HomePage;
