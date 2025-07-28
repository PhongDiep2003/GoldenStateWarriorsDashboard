// A list of custom hooks for fetching data from different endpoints
import useApi from './useApi';
import { api } from '../services/api';
export const useFetchAllPlayers = () => useApi(() => api.getAllPlayers());
export const useFetchTeamInfo = () => useApi(() => api.getTeamInfo());
export const useFetchPreviousGames = () => useApi(() => api.getPreviousGames());
export const useFetchUpcomingGames = () => useApi(() => api.getUpcomingGames());
