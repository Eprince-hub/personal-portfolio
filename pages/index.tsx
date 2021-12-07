import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import AboutPage from '../components/AboutPage';
import ContactPage from '../components/ContactPage';
import HomePageHero from '../components/HomePageHero';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout title="Home Page" customPageClassName={styles.homePageStyle}>
      <HomePageHero />

      <Box>
        <Typography component="h1" variant="h1">
          I AM SUPPOSED TO BE A RED TEXT H1
        </Typography>
        <Typography component="h2" variant="h2">
          I AM SUPPOSED TO BE A RED TEXT H2
        </Typography>
        <Typography component="h3" variant="h3">
          I AM SUPPOSED TO BE A RED TEXT H3
        </Typography>
        <Typography component="h4" variant="h4">
          I AM SUPPOSED TO BE A RED TEXT H4
        </Typography>
      </Box>

      <Box>
        <AboutPage />
      </Box>

      <Box>
        <ContactPage />
      </Box>
    </Layout>
  );
}
