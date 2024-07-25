import LOGO from "../../assets/logo.png";
import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.img} src={LOGO} alt="" />
    </div>
  );
};

export default Logo;
