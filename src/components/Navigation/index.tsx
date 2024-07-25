import styles from "./styles.module.scss";

interface ItemProps {
    logo: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
}

interface IProps {
    menus: { label: string; logo: string }[];
    activeMenu: number;
    setActiveMenu: (value: number) => void;
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

const Navigation = ({ menus, activeMenu, setActiveMenu }: IProps) => {
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
