import Logo from "../Logo";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

interface IProps {
    menus: { label: string; logo: string }[];
    activeMenu: number;
    setActiveMenu: (value: number) => void;
}

const Header = ({ menus, activeMenu, setActiveMenu }: IProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <Logo />

                <div className={styles.seperator} />

                <Navigation
                    menus={menus}
                    activeMenu={activeMenu}
                    setActiveMenu={setActiveMenu}
                />
            </div>
        </div>
    );
};

export default Header;
