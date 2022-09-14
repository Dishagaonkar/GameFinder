import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerRaised}>
      <div className={styles.headerContainer}>
        <h1>Website Header</h1>
      </div>
    </div>
  );
};

export default Header;
