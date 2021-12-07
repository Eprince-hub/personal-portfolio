import { Link } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import profileImage from '../public/images/profileImages/profile-image.webp';
import styles from '../styles/Home.module.css';
import classes from '../utils/classes';

export default function HomePageHero() {
  return (
    <section>
      <Box className={styles.homePageHeroStyle}>
        <Box className={styles.heroTextContainer}>
          <h1 className={styles.homePageHeader}>Hey!,</h1>
          {/*  {' '}
          <div className={styles.wrapper}>
            <div className={styles.staticText}>I'm a</div>
            <ul className={styles.dynamicTexts}>
              <li>
                <span>YouTuber</span>
              </li>
              <li>
                <span>Designer</span>
              </li>
              <li>
                <span>Developer</span>
              </li>
              <li>
                <span>Freelancer</span>
              </li>
            </ul>
          </div> */}
          {/* Another text animation */}
          <div className={styles.animatedTextContainer}>
            <h1>
              I am a
              <span className={styles.type}>
                <span>
                  <span>Developer</span>
                  <span>Web Designer</span>
                  <span>Blogger</span>
                  <span>YouTuber</span>
                </span>
              </span>
            </h1>
          </div>
        </Box>
        <Box className={styles.heroImageContainer}>
          <span className={styles.profileImage}>
            <Image src={profileImage} alt="Victor Profile Image" />
          </span>
        </Box>
      </Box>
    </section>
  );
}

/*



         <aside>
            <div className="content-text position-relative">
              <div
                className="animate-element wow delay5 fadeInDown"
                data-wow-delay="0.3s"
              >
                <div className="tag color-d1 lt-sp53 mg-b34">
                  Product Designer
                </div>
                <h1 className="cd-headline clip is-full-width title color-d11 mg-b41">
                  <span>Hello, </span>
                  <span className="cd-words-wrapper color-d6">
                    <b className="is-visible">I’m Perry!</b>
                    <b>I’m Olivia!</b>
                    <b>I’m Amelia!</b>
                  </span>
                </h1>
                <p className="color-d13 lt-sp02 mg-b51">
                  Hi, i m perry, professional ux designer with 4 years <br />
                  of experience. Need any help?
                </p>
              </div>
              <div
                className="animate-element wow delay5 fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="fl-btn btn-general color-s2 btn-hv-border">
                  //  Need to change it to implement next link

                  <NextLink href="/" passHref>
                    <Link
                    /*          to="#"
                  className="f-w500 color-d6 border-corner5 lt-sp01 text-two" */
//           >
//             Download Resume
//           </Link>
//         </NextLink>
//       </div>
//     </div>
//   </div>
// </aside>
