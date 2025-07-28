// Game Card Component (for displaying game results)
import React from 'react';
import { formatGameDateTime } from '../utils/functions';
import { styles } from '../utils/styles';
interface GameCardInterface {
  homeTeam: {
    badgeLogo: string;
    name: string;
    score?: string;
  };
  awayTeam: {
    badgeLogo: string;
    name: string;
    score?: string;
  };
  timestamp: string;
  video?: string;
  videoThumbnail?: string;
  status: string;
}
const GameCard = ({
  homeTeam,
  awayTeam,
  timestamp,
  status,
}: GameCardInterface) => {
  let dateEvent,
    timeEvent = 'N/A';

  if (timestamp && timestamp != '') {
    const { date, time } = formatGameDateTime(timestamp);
    dateEvent = date;
    timeEvent = time;
  }

  return (
    <div className="flex-1 min-w-0 border-r border-gray-200 last:border-r-0">
      {/* Date and Time */}
      <div className="p-3 border-b border-gray-200 bg-gray-50">
        <div className="text-sm font-semibold text-black mb-1">{dateEvent}</div>
        <div className="text-xs text-gray-600">{timeEvent}</div>
      </div>

      {/* Teams */}
      <div className="p-3">
        {/* Away Team */}
        <div className={`${styles.flexBetween} mb-2`}>
          <div className={`${styles.flexRow}`}>
            <div
              className={`w-6 h-6 bg-gray-100 rounded-full mr-2 ${styles.flexCenter}`}
            >
              <img src={awayTeam.badgeLogo} alt="Away Team Badge Logo " />
            </div>
            <span className="font-semibold text-black text-sm">
              {awayTeam.name}
            </span>
          </div>
          <span className="text-xs text-gray-600">{awayTeam.score}</span>
        </div>

        {/* Home Team */}
        <div className={`${styles.flexBetween} mb-2`}>
          <div className={`${styles.flexRow}`}>
            <div
              className={`w-6 h-6 bg-gray-100 rounded-full mr-2 ${styles.flexCenter}`}
            >
              <img src={homeTeam.badgeLogo} alt="Home Team Badge Logo " />
            </div>
            <span className="font-semibold text-black text-sm">
              {homeTeam.name}
            </span>
          </div>
          <span className="text-xs text-gray-600">{homeTeam.score}</span>
        </div>
        {/* Status */}
        <div className="text-center mt-2">
          <span className="text-xs text-gray-500 uppercase">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
