import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);
  const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}/>
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{ currentExperience }xp</span>
      </div>
      <span>{ experienceToNextLevel } px</span>
    </header>
  )
}

export default ExperienceBar;
