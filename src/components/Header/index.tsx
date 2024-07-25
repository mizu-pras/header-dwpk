import Logo from "../Logo";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo />

        <div className={styles.seperator} />

        <Navigation />
      </div>
    </div>
  );
};

export default Header;
