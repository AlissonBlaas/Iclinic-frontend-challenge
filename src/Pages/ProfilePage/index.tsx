import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Avatar,
  Typography,
  IconButton,
  useMediaQuery,
  Skeleton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useUser } from '../../hooks/user';

import Button from '../../components/Button';

import BackButton from '../../assets/svgs/back-button';

import DarthVader from '../../assets/images/darth-vader.png';
import Luke from '../../assets/images/luke-skywalker.png';

import useStyles from './styles';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const { fetchUserInfo, user, isLoading } = useUser();
  const history = useNavigate();
  const isSmall = useMediaQuery('(max-width: 800px)');

  const userName = user?.name;
  const lukeName = userName === 'Luke Skywalker';

  const styleProps = { background: lukeName ? '#FBFE63' : '#2B2B2B' };
  const classes = useStyles(styleProps);

  const goBackButton = useCallback(() => {
    history('/');
  }, [history]);

  const goToProfile = useCallback(() => {
    fetchUserInfo(1);
    fetchUserInfo(4);
  }, [fetchUserInfo]);

  return (
    <Box className={classes.container}>
      <Box className={classes.content}>
        <Box className={classes.backButtonContainer}>
          <IconButton onClick={goBackButton}>
            <BackButton color={lukeName ? '#2A2A2A' : '#fff'} />
            <Typography color={lukeName ? '#2A2A2A' : '#fff'}>back</Typography>
          </IconButton>
        </Box>
        {!isSmall && (
          <Button
            textColor={lukeName ? '#FBFE63' : '#2B2B2B'}
            width={347}
            background={lukeName ? '#2A2A2A' : '#fff'}
            title="choose your path again, Padawan"
            onClick={goToProfile}
            disabled={isLoading}
          />
        )}

        <Box className={classes.contentUser}>
          {isLoading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={isSmall ? 302 : 380}
              height={isSmall ? 302 : 380}
              sx={{ marginBottom: 4 }}
            />
          ) : (
            <Avatar
              alt="Remy Sharp"
              src={userName === 'Luke Skywalker' ? Luke : DarthVader}
              sx={{
                width: isSmall ? 302 : 380,
                height: isSmall ? 302 : 380,
                marginBottom: 4,
              }}
            />
          )}

          {isLoading ? (
            <Skeleton
              animation="wave"
              width="100%"
              height={80}
              sx={{ marginBottom: 4, maxWidth: 600 }}
            />
          ) : (
            <Typography fontSize={36} color={lukeName ? '#2A2A2A' : '#fff'}>
              Your Master is
              <span className={classes.userText}>{userName}</span>
            </Typography>
          )}
        </Box>
        {isSmall && (
          <Button
            textColor={lukeName ? '#FBFE63' : '#2B2B2B'}
            width="auto"
            background={lukeName ? '#2A2A2A' : '#fff'}
            title="choose your path again, Padawan"
            onClick={goToProfile}
            disabled={isLoading}
            sx={{ maxWidth: 347 }}
          />
        )}
      </Box>
    </Box>
  );
};
export default HomePage;
