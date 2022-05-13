import styles from "../styles/header/header.module.scss"
import logo from "../images/logo.svg";
import iconPoint from "../images/point.svg"
import {Switch} from "@mui/material";


function Header () {
    const label = { inputProps: { 'aria-label': 'Switch demo' }}

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <img className={styles.logo} src={logo} alt="Логотип"/>
                <div className={styles.point}>
                    <p className={styles.country}>Россия</p>
                    <p className={styles.city}>г. Иркутск</p>
                    <img className={styles.iconPoint} src={iconPoint} alt="Место"/>
                </div>
                <div className={styles.button}>
                    <Switch {...label} defaultChecked />
                </div>
            </div>
        </header>
    )
}

export default Header