import styles from "../styles/main.module.scss";
import CardDate from "./CardDate"
import React from "react";

const Card: React.FC<any> = ({temp, date, weather}) => {
    const dateWeek = new Date (date * 1000);
    const weekDayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]


    function getDateForCard () {
        return dateWeek.getDate();
    }

    function getDayForCard() {
        const day = dateWeek.getDay();
        return weekDayNames[day]
    }

    function getMonthForCard() {
        const month = dateWeek.getMonth();
        return monthNames[month]
    }

    function getTempForCard () {
        return Math.round(temp)
    }

    return (
        <li className={styles.card}>
            <CardDate
                cardDate={getDateForCard}
                cardDay={getDayForCard}
                cardMonth={getMonthForCard}
            />
            <img className={styles.icon} src={weather.icon} alt="Солнечно"/>
            <p className={styles.temperature}> {getTempForCard()}&deg;</p>
        </li>
    )
}

export default Card;