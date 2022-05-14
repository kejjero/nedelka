import styles from "../styles/main/main.module.scss";
import sun from "../images/sun.svg";

function Card (props) {
    return (
        <li className={styles.card}>
            <div className={styles.week}>
                <p className={styles.weekDay}>Пн</p>
            </div>
            <div className={styles.dateWrapper}>
                <h2 className={styles.date}>21</h2>
                <p className={styles.month}>июня</p>
            </div>
            <img className={styles.icon} src={sun} alt="Солнечно"/>
            <p className={styles.temperature}>{Math.round(props.temp)}°</p>
        </li>
    )
}

export default Card;