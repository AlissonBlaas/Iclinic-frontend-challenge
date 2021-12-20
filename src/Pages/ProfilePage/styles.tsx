import { makeStyles } from '@mui/styles';

type IProps = {
  background: string;
};

const useStyles = makeStyles({
  container: {
    padding: 40,
    background: (props: IProps) => props.background,
    height: '100vh',
    '@media(max-width: 768px)': {
      padding: 10,
    },
  },
  content: {
    display: 'grid',
    placeItems: 'center',
    gridGap: 40,
  },
  backButtonContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    '& p': {
      marginLeft: 10,
    },
  },
  contentUser: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
  },
  userText: {
    fontWeight: 'bold',
    marginLeft: 15,
  },
  userName: {
    latterSpacing: '0.35em',
  },
});

export default useStyles;
