import styles from "../styles/popupForCards.module.scss"

function PopupForCards () {

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