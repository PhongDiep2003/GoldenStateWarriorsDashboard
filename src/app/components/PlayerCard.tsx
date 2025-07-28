// Player card component (for displaying player information)
import React from 'react';
import { styles } from '../utils/styles';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
interface PlayerInterface {
  thumbnail: string;
  name: string;
  position: string;
  height: string;
  weight: string;
  number: string;
}
const PlayerCard = ({
  thumbnail,
  name,
  position,
  height,
  weight,
  number,
}: PlayerInterface) => {
  const playerCardAnimation = useScrollAnimation();
  return (
    <div
      className={`rounded-2xl overflow-hidden relative shadow-xl ${styles.animationScroll} ${
        playerCardAnimation.isVisible ? styles.slideUp : styles.slideDown
      }  `}
      ref={playerCardAnimation.ref}
    >
      {/* Player Image */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Player Info Overlay */}
      <div
        className={`bg-white absolute bottom-5 left-1/2 -translate-x-1/2 border-black border-1 rounded-2xl p-1  w-3/4 h-fit `}
      >
        <div className={`${styles.flexBetween} mb-3`}>
          <div>
            <h3 className="font-bold md:text-lg text-sm text-black">
              #{number} {name}
            </h3>
            <p className="md:text-sm text-xs text-black">
              Position: {position}
            </p>
            <p className="md:text-sm text-xs text-black">
              <span>Height: {height}</span> <span>Weight: {weight}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
