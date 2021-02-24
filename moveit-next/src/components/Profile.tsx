import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Gustavo-tech.png" alt="Gustavo Henrique"/>
      <div>
        <strong>Gustavo Henrique</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1</p>
      </div>
    </div>
  );
}