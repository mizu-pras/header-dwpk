import LOBBY_ICON from "../../assets/lobby-icon.png";
import LEADERBOARD_ICON from "../../assets/leaderboard-icon.png";
import TRANSACTION_ICON from "../../assets/transaction-icon.png";
import PROMOTION_ICON from "../../assets/promotion-icon.png";
import TUTORIAL_ICON from "../../assets/tutorial-icon.png";
import { useState } from "react";
import styles from "./styles.module.scss";

interface ItemProps {
  logo: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Item = ({ label, logo, isActive, onClick }: ItemProps) => {
  return (
    <div
      className={`${styles.item}${isActive ? ` ${styles.active}` : ""}`}
      onClick={onClick}
    >
      <img className={styles["item-logo"]} src={logo} alt="" />
      <span className={styles["item-label"]}>{label}</span>
    </div>
  );
};

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const menus: { label: string; logo: string }[] = [
    {
      label: "Lobby",
      logo: LOBBY_ICON,
    },
    {
      label: "Leaderboard",
      logo: LEADERBOARD_ICON,
    },
    {
      label: "Transaction",
      logo: TRANSACTION_ICON,
    },
    {
      label: "Promotion",
      logo: PROMOTION_ICON,
    },
    {
      label: "Tutorial",
      logo: TUTORIAL_ICON,
    },
  ];

  return (
    <div className={styles.navigation}>
      {menus.map((menu, idx) => (
        <Item
          key={idx}
          label={menu.label}
          logo={menu.logo}
          isActive={activeMenu === idx}
          onClick={() => setActiveMenu(idx)}
        />
      ))}
    </div>
  );
};

export default Navigation;
