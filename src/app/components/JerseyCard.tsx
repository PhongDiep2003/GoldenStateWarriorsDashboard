// Jerysey Card component
import React from 'react';
import { styles } from '../utils/styles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const JerseyCard = ({ url }: { url: string | undefined }) => {
  const jersey = useScrollAnimation();
  return (
    <div
      className={`${styles.flexCenter} ${styles.flexColumn} ${styles.animationScroll} ${jersey.isVisible ? styles.slideLeft : styles.slideRight}`}
      ref={jersey.ref}
    >
      {/* Jersey Image */}

      <img
        src={url ? url : '/images/fallbackJersey.avif'}
        alt={'Jersey Image'}
        className="w-fit h-[500px] object-cover rounded-lg"
      />

      {/* Learn More Button */}
      <div className="p-4">
        <a
          href="https://store.nba.com/golden-state-warriors/jerseys/mens-golden-state-warriors-stephen-curry-fanatics-white-fast-break-replica-jersey-association-edition/t-25362863+d-4561283050+f-434841931+z-8-3397718554?utm_medium=cse&_s=ak1944nba-pla&sku=207478255&targetid=targetid&utm_campaign=21835927898_172299183554&gad_source=1&gad_campaignid=21835927898&gbraid=0AAAAADwsNmF55tEgRKCvun7sfKyswnwGj&gclid=Cj0KCQjwnJfEBhCzARIsAIMtfKKrhE6dI3dpvD28mDfPE5qXP8_sx9A4BTIi_4mV8hbTTCPeChlhkMwaAi5nEALw_wcB"
          target="_blank"
          className={`${styles.bgPrimary} ${styles.flexRow} text-white font-semibold py-3 px-6 rounded-lg gap-2 ${styles.buttonHover}`}
        >
          <span>Learn More</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default JerseyCard;
