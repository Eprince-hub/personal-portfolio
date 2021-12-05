import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';

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
    <header>
      <nav /* className={styles.navMenu} */>
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

        <Box /* sx={classes.navbarButtons} */>
          <NextLink href="/" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                HOME
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/about" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                ABOUT ME
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                CONTACT ME
              </Typography>
            </Link>
          </NextLink>

          <NextLink href="/blog" passHref>
            <Link>
              <Typography variant="h2" component="h2">
                BLOG
              </Typography>
            </Link>
          </NextLink>
        </Box>
      </nav>
    </header>
  );
}
