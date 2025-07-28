// Profile component
import React from 'react';
import { useFetchTeamInfo } from '../hooks/utilHooks';
import { TeamInfo, ErrorMessage } from '../utils/types';
import { styles } from '../utils/styles';
import JerseyCard from './JerseyCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ChaseCenter from './ChaseCenter';
const Profile = () => {
  const { data }: { data: Partial<TeamInfo & ErrorMessage> | null } =
    useFetchTeamInfo();

  const header = useScrollAnimation();
  const image1 = useScrollAnimation();
  const image2 = useScrollAnimation();
  const storyTitle = useScrollAnimation();
  const storyContent = useScrollAnimation();
  const jerseyTitle = useScrollAnimation();

  return (
    <div className={`${styles.bgSecondary} ${styles.paddingBtwSection}`}>
      {/* Header Section */}
      <div
        ref={header.ref}
        id="header"
        className={`${styles.container} ${styles.animationScroll} ${
          header.isVisible ? styles.slideUp : styles.slideDown
        }`}
      >
        <div className={`${styles.textPrimary} text-sm uppercase `}>
          We are Warriors
        </div>
        <h1
          className={`${styles.heroTitle} ${styles.marginBtwContent} text-black `}
        >
          We set out to build
          <br />
          <span className={`${styles.textPrimary}`}>a championship legacy</span>
        </h1>
        <div className={`max-w-md`}>
          <p
            className={`${styles.contentText} ${styles.marginBtwContent} text-gray-700`}
          >
            Together—the players and organization of Golden State—we are
            reinventing professional basketball and winning championships.
          </p>
        </div>
      </div>

      {/* Images Section */}
      <div
        id="images"
        className={`flex md:items-start md:flex-row  ${styles.flexColumn} md:space-x-6 ${styles.marginBtwContent} ${styles.container}`}
      >
        <div
          className={`rounded-2xl overflow-hidden ${styles.animationScroll} ${image1.isVisible ? styles.slideLeft : styles.slideRight}`}
          ref={image1.ref}
        >
          <img
            src={'/images/image1.jpg'}
            alt={'Team profile image'}
            className={`${styles.imageProfile}`}
          />
        </div>

        <div
          className={`rounded-2xl overflow-hidden ${styles.animationScroll} ${image2.isVisible ? styles.slideLeft : styles.slideRight}`}
          ref={image2.ref}
        >
          <img
            src={'/images/image2.webp'}
            alt={'Team profile image'}
            className={`${styles.imageProfile}`}
          />
        </div>
      </div>

      {/* Story Section */}
      <div
        className={`flex md:items-start md:flex-row  ${styles.flexColumn} ${styles.marginBtwContent} ${styles.container}`}
      >
        <div
          className={`flex-1 ${styles.animationScroll} ${
            storyTitle.isVisible ? styles.slideUp : styles.slideDown
          }`}
          ref={storyTitle.ref}
        >
          <h2 className={`${styles.sectionTitleText} text-black`}>
            Our Story
            <span className={`ml-3 text-3xl md:opacity-100 opacity-0`}>↘</span>
          </h2>
        </div>

        <div
          className={`flex-1 ${styles.animationScroll} ${storyContent.isVisible ? styles.slideLeft : styles.slideRight} `}
          ref={storyContent.ref}
        >
          <p className={`${styles.contentText} text-gray-700`}>{data?.story}</p>
        </div>
      </div>

      {/* Chase Center Section */}
      <ChaseCenter />

      {/* Jersey Section */}
      <div className={`flex-1`}>
        <div
          className={`flex md:items-start md:flex-row  ${styles.flexColumn} ${styles.marginBtwContent} ${styles.container} `}
        >
          <div
            className={`${styles.animationScroll} ${
              jerseyTitle.isVisible ? styles.slideUp : styles.slideDown
            }`}
            ref={jerseyTitle.ref}
          >
            <h2 className={`${styles.sectionTitleText} text-black`}>
              Our Jerseys
              <span className={`ml-3 text-3xl md:opacity-100 opacity-0 `}>
                ↘
              </span>
            </h2>
          </div>

          <div className={`md:flex-1 md:w-fit w-full `}>
            <JerseyCard url={data?.jerseyImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
