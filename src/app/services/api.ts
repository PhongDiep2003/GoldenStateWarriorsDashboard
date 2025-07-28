// I implemented this service to make the process of fetching data from the API more efficient, resuable, and clean.
import { GameInfo, PlayerInfo, TeamInfo } from '../utils/types';

async function apiRequest<T>(endpoint: string): Promise<T> {
  const response = await fetch(`/api${endpoint}`);
  return await response.json();
}

export const api = {
  getTeamInfo: (): Promise<TeamInfo> => apiRequest('/teamInfo'),

  getPreviousGames: (): Promise<GameInfo[]> => apiRequest('/allPreviousGames'),

  getUpcomingGames: (): Promise<GameInfo[]> => apiRequest('/allUpcomingGames'),

  getAllPlayers: (): Promise<PlayerInfo[]> => apiRequest('/allPlayers'),
};
