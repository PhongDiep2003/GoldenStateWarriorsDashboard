// Dashboard component for Golden State Warriors
'use client';
import React from 'react';
import { useTabContext } from './context/tabContext';
import { TABS } from './utils/staticInfo';
import Profile from './components/Profile';
import Schedule from './components/Schedule';
import Roster from './components/Roster';

const Dashboard = () => {
  const { activeTab } = useTabContext();

  return activeTab === TABS.PROFILE ? (
    <Profile />
  ) : activeTab === TABS.SCHEDULE ? (
    <Schedule />
  ) : (
    activeTab === TABS.ROSTER && <Roster />
  );
};

export default Dashboard;
