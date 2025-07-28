// Navigation Bar component
'use client';
import React from 'react';
import { styles } from '../utils/styles';
import { TABS } from '../utils/staticInfo';
import { useTabContext } from '../context/tabContext';
const NavBar = () => {
  const { activeTab, setActiveTab } = useTabContext();
  return (
    <div className={`${styles.bgPrimary}`}>
      <div className={`${styles.container} ${styles.borderPrimary} border-b`}>
        <div>
          <nav className="flex space-x-8">
            {[
              { id: TABS.PROFILE, label: TABS.PROFILE },
              { id: TABS.SCHEDULE, label: TABS.SCHEDULE },
              { id: TABS.ROSTER, label: TABS.ROSTER },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.navTab} ${styles.navBarText} ${
                  activeTab === tab.id
                    ? `${styles.borderSecondary} border-b ${styles.textSecondary}`
                    : `border-transparent`
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
