import styles from "../styles/popupForCards.module.scss"
import React from "react";

const PopupForCards: React.FC = () => {

    return (
        <div className={styles.popup}>
            <div className={styles.contain}>
                <button className={styles.closeButton}>
                </button>
            </div>
        </div>
    )
}

export default PopupForCards;