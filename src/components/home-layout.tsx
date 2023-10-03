import type { FC, ReactNode } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Navbar } from './navbar';
import { Box } from '@mui/material';

interface HomeLayoutProps {
  children?: ReactNode;
}

const HomeLayoutRoot = styled('div')(
  () => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 100,
    paddingBottom: 20
  })
);

export const HomeLayout: FC<HomeLayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <HomeLayoutRoot>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </HomeLayoutRoot>
      <Navbar />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node
};
