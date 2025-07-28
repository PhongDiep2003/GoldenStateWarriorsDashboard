// I implemented this context to manage tabs and determine the active one.
'use client';
import { createContext, useContext, useState } from 'react';
import { TABS } from '../utils/staticInfo';
interface TabContextProps {
  activeTab: string;
  setActiveTab: (tab: TABS) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<TABS>(TABS.PROFILE);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}
export function useTabContext() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
}
