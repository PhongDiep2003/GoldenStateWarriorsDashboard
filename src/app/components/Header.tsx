// Header component
import React from 'react';
import { styles } from '../utils/styles';
const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-blue-900/60 backdrop-blur-sm">
      <div className={styles.container}>
        <div className={`${styles.flexBetween} ${styles.navHeight}`}>
          <div className={`${styles.flexRow}`}>
            <div>
              <img
                src={'/images/golden-state-warriors-logo.webp'}
                alt={'Golden State Warriors Logo'}
                className="md:h-15 md:w-15 h-12 w-12"
              />
            </div>
            <div className={`${styles.navBarText}`}>
              Golden State Warriors
              <br></br>
              <span className={`${styles.navBarSubText}`}>
                An American professional basketball team
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
