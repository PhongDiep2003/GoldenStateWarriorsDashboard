// Schedule component (for displaying upcoming and previous games)
import React from 'react';
import { styles } from '../utils/styles';
import GameCard from './GameCard';
import {
  useFetchUpcomingGames,
  useFetchPreviousGames,
} from '../hooks/utilHooks';
import { GameInfo } from '../utils/types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
const Schedule = () => {
  const { data: upcominggames }: { data: GameInfo[] | null } =
    useFetchUpcomingGames();
  const { data: previousgames }: { data: GameInfo[] | null } =
    useFetchPreviousGames();

  const scheduleTitleAnimation = useScrollAnimation();
  const upcomingGamesTitleAnimation = useScrollAnimation();
  const upcomingGamesTableAnimation = useScrollAnimation();
  const previousGamesTitleAnimation = useScrollAnimation();
  const previousGamesTableAnimation = useScrollAnimation();

  return (
    <div className={`${styles.bgSecondary} h-fit `}>
      <h2
        className={`${styles.sectionTitleText} text-center text-black ${styles.paddingBtwSection} ${styles.animationScroll} ${
          scheduleTitleAnimation.isVisible ? styles.slideUp : styles.slideDown
        }`}
        ref={scheduleTitleAnimation.ref}
      >
        Schedule
      </h2>
      {/* Games */}
      <div className={`${styles.container}`}>
        <p
          className={`${styles.marginBtwContent} ${styles.contentText} ${styles.animationScroll} ${
            upcomingGamesTitleAnimation.isVisible
              ? styles.slideUp
              : styles.slideDown
          } text-black font-bold`}
          ref={upcomingGamesTitleAnimation.ref}
        >
          Upcoming Games
        </p>
        {/* Upcoming Games */}
        <div>
          <div
            className={`border border-gray-200 bg-white overflow-x-auto ${styles.animationScroll} ${upcomingGamesTableAnimation.isVisible ? styles.slideLeft : styles.slideRight}  `}
            ref={upcomingGamesTableAnimation.ref}
          >
            <div className="flex min-w-full">
              {upcominggames && upcominggames.length > 0 ? (
                upcominggames.map(game => (
                  <GameCard
                    key={game.timestamp}
                    homeTeam={{
                      badgeLogo: game.homeTeam.badgeLogo,
                      name: game.homeTeam.name,
                      score: game.homeTeam.score,
                    }}
                    awayTeam={{
                      badgeLogo: game.awayTeam.badgeLogo,
                      name: game.awayTeam.name,
                      score: game.awayTeam.score,
                    }}
                    timestamp={game.timestamp}
                    status={game.status}
                  />
                ))
              ) : (
                <div className="text-center text-gray-500 w-full py-4">
                  No upcoming games
                </div>
              )}
            </div>
          </div>
        </div>

        <p
          className={`${styles.marginBtwContent} ${styles.contentText} text-black font-bold ${styles.animationScroll} ${
            previousGamesTitleAnimation.isVisible
              ? styles.slideUp
              : styles.slideDown
          }`}
          ref={previousGamesTitleAnimation.ref}
        >
          Previous Games
        </p>
        {/* Previous Games */}
        <div>
          <div
            className={`border border-gray-200 bg-white overflow-x-auto ${styles.animationScroll} ${previousGamesTableAnimation.isVisible ? styles.slideLeft : styles.slideRight}  `}
            ref={previousGamesTableAnimation.ref}
          >
            <div className="flex min-w-full">
              {previousgames && previousgames.length > 0 ? (
                previousgames.map(game => (
                  <GameCard
                    key={game.timestamp}
                    homeTeam={{
                      badgeLogo: game.homeTeam.badgeLogo,
                      name: game.homeTeam.name,
                      score: game.homeTeam.score,
                    }}
                    awayTeam={{
                      badgeLogo: game.awayTeam.badgeLogo,
                      name: game.awayTeam.name,
                      score: game.awayTeam.score,
                    }}
                    timestamp={game.timestamp}
                    status={game.status}
                  />
                ))
              ) : (
                <div className="text-center text-gray-500 w-full py-4">
                  No previous games
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
