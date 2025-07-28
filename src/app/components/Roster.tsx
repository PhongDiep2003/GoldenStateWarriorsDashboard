// Roster component (for displaying the team roster)
import React, { useState } from 'react';
import { useFetchAllPlayers } from '../hooks/utilHooks';
import { styles } from '../utils/styles';
import { PlayerInfo } from '../utils/types';
import PlayerCard from './PlayerCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Roster = () => {
  const rosterTitleAnimation = useScrollAnimation();
  const filterButtonsAnimation = useScrollAnimation();
  const positions = ['All', 'Guard', 'Forward', 'Manager'];
  const [activePosition, setActivePosition] = useState('All');
  const { data }: { data: PlayerInfo[] | null } = useFetchAllPlayers();

  // Filter players based on active position
  const filteredPlayers =
    data?.filter(
      player =>
        activePosition === 'All' ||
        player.position.toLowerCase().includes(activePosition.toLowerCase())
    ) || [];

  return (
    <div className={`${styles.bgSecondary} ${styles.paddingBtwSection}`}>
      <h2
        className={`${styles.sectionTitleText} text-center text-black ${styles.animationScroll} ${
          rosterTitleAnimation.isVisible ? styles.slideUp : styles.slideDown
        }`}
        ref={rosterTitleAnimation.ref}
      >
        Our Warriors
      </h2>
      <div className={`${styles.container}`}>
        {/* Filter Buttons */}
        <div
          className={`sm:flex sm:flex-row sm:justify-center sm:items-start ${styles.flexColumn} items-center gap-3 ${styles.marginBtwContent} ${styles.animationScroll} ${
            filterButtonsAnimation.isVisible ? styles.slideUp : styles.slideDown
          }`}
          ref={filterButtonsAnimation.ref}
        >
          {positions.map(position => (
            <button
              key={position}
              onClick={() => setActivePosition(position)}
              className={`px-6 py-2.5 w-fit  rounded-full font-bold border-1 border-black ${styles.buttonHover}  ${styles.contentText} ${
                activePosition === position
                  ? `${styles.bgPrimary} text-white shadow-md`
                  : 'bg-white text-black '
              }`}
            >
              {position === 'All' || position === 'Manager'
                ? position
                : position + 's'}
            </button>
          ))}
        </div>
        {/* Player Cards */}
        <div
          className={`${styles.marginBtwContent} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10`}
        >
          {filteredPlayers instanceof Array && filteredPlayers.length > 0 ? (
            filteredPlayers.map((player, index) => (
              <PlayerCard
                thumbnail={player.thumbnail}
                name={player.name}
                position={player.position}
                height={player.height}
                weight={player.weight}
                number={player.number}
                key={index}
              />
            ))
          ) : (
            <h1 className={`${styles.contentText} text-black font-bold`}>
              No Players Found
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roster;
