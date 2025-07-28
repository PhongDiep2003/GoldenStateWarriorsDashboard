import React from 'react';
import { styles } from '../utils/styles';
import JerseyCard from './JerseyCard';
import { useFetchTeamInfo } from '../hooks/utilHooks';
import { TeamInfo, ErrorMessage } from '../utils/types';
const JerseySection = () => {
  const { data }: {data: Partial<TeamInfo & ErrorMessage> | null}  = useFetchTeamInfo();
  return (
    <div>
      <div 
        className={`${styles.flexStart} ${styles.marginBtwContent} ${styles.container} `}
      >
        <div className='flex-1'
        >
          <h2 className={`${styles.sectionTitleText} text-black`}>
            Our Jerseys
            <span 
              className={`ml-3 text-3xl`}
            >
              ↘
            </span>
          </h2>
        </div>
        
        <div 
          className={`flex-1`}
        >
          <div className={`${styles.flexColumn}`}>
            <JerseyCard url={data?.jerseyImage}/>
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default JerseySection;