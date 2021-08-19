import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JG-OLIVEIRA.png" alt="Jorge Oliveira" />
      <div>
        <strong>Jorge Oliveira</strong>
        <p>
          <img src="icons/level.svg" />
          Level 1
        </p>
      </div>
    </div>
  );
}
