import Header from "./components/Header";
import LOBBY_ICON from "./assets/lobby-icon.png";
import LEADERBOARD_ICON from "./assets/leaderboard-icon.png";
import TRANSACTION_ICON from "./assets/transaction-icon.png";
import PROMOTION_ICON from "./assets/promotion-icon.png";
import TUTORIAL_ICON from "./assets/tutorial-icon.png";
import { useState } from "react";
import Page from "./components/Page";

export default function App() {
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
        <div className="App">
            <Header
                menus={menus}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
            />

            <Page page={menus[activeMenu].label} />
        </div>
    );
}
