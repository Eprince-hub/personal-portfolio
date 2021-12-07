import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
/* import { SxProps } from '@mui/system';
 */
import Head from 'next/head';
import React, { ReactNode } from 'react';
import classes from '../utils/classes';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  title: string;
  children: ReactNode;
  customPageClassName?: string;
  /* sx?: SxProps; */
};

/* declare module '@mui/material/styles' {
  interface;
} */

const theme = createTheme({
  // this was changed to createTheme as advised but it throws an error

  // This is new from mui
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
  },

  typography: {
    h1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
      fontFamily: 'Archivo Black',
      color: 'red',
    },

    h2: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
      fontFamily: 'Merriweather',
    },

    h3: {
      fontSize: '1.6rem',
      fontWeight: 400,
      margin: '1rem 0',
      fontFamily: 'Playball',
    },

    h4: {
      fontSize: '1.8rem',
      fontWeight: 400,
      margin: '1rem 0',
      fontFamily: 'Archivo Black',
    },

    h5: {
      fontSize: '1.6rem',
      fontWeight: 400,
      fontFamily: 'Padauk',
    },
  },

  palette: {
    primary: {
      main: '#002B2B',
    },
    secondary: {
      main: '#002B2B',
    },
  },
});

export default function Layout({
  /* sx= [],  */ customPageClassName,
  title,
  children,
}: LayoutProps) {
  return (
    <Box className={customPageClassName}>
      <Head>
        <title>
          {title ? `${title} - Personal portfolio` : 'Personal Portfolio'}
        </title>

        <meta
          name="description"
          content="My personal portfolio, will add more later for seo"
        />
      </Head>

      {/* Wrap the whole application with the material UI Themeprovider */}

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />

        <Container component="main" sx={classes.main} maxWidth={false}>
          {children}
        </Container>

        <Footer />
      </ThemeProvider>
    </Box>
  );
}
