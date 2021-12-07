import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import classes from '../utils/classes';

export default function Header() {
  // change navbar background color on scroll
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window === undefined) {
        return;
      } else {
        if (window.scrollY >= 50) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      }
    };

    changeBackground();

    window.addEventListener('scroll', changeBackground);
  }, [navbar]);

  return (
    <header
      className={navbar ? styles.headerStyleOnScroll : styles.headerStyle}
    >
      <nav className={styles.navMenu}>
        <Box>
          <div /* className={styles.logo} */>
            {navbar ? (
              <NextLink href="/" passHref>
                <Link>
                  {/* <Image src={footerLogo} alt="Pure Farm Logo"></Image> */}
                  LOGO HERE
                </Link>
              </NextLink>
            ) : (
              <NextLink href="/" passHref>
                <Link>
                  {/* <Image src={headerLogo} alt="Pure Farm Logo"></Image> */}
                  SCROLLED LOGO HERE
                </Link>
              </NextLink>
            )}
          </div>
        </Box>

        <Box sx={classes.navbarButtons}>
          <NextLink href="/" passHref>
            <Link>
              <Typography component="p">Home</Typography>
            </Link>
          </NextLink>

          <NextLink href="/about" passHref>
            <Link>
              <Typography component="p">About</Typography>
            </Link>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Link>
              <Typography component="p">Contact</Typography>
            </Link>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Link>
              <Typography component="p">Blog</Typography>
            </Link>
          </NextLink>
        </Box>

        <Box>
          <FacebookRoundedIcon />
        </Box>
      </nav>
    </header>
  );
}
