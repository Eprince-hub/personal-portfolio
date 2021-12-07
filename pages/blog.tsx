import { StylesContext } from '@mui/styles';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function BlogMainPage() {
  return (
    <Layout title="Blog Page" customPageClassName={styles.blogPageStyle}>
      <div>THIS WILL BE THE BLOG PAGE,, WILL BE A DYNAMIC PAGE</div>
    </Layout>
  );
}
