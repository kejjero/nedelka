import styles from "../styles/main.module.scss";
import cloudsSun from "../images/iconsWeather/clouds-sun.svg"
// import clouds from "../images/iconsWeather/clouds.svg"
import rain from "../images/iconsWeather/rain.svg"
import rainSun from "../images/iconsWeather/rainSun.svg"
import sun from "../images/sun.svg"
import CardDate from "./CardDate"

function Card (props) {
    const dateWeek = new Date (props.date * 1000);

    // потом нужно будет прокинуть через контекст
    const iconsWeather = [
        {'небольшая облачность': cloudsSun},
        {'небольшой дождь': rainSun},
        {'пасмурно': cloudsSun},
        {'дождь': rain},
        {'переменная облачность': sun}
    ]
    const weekDayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
    const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]

    console.log(props.description)

    function getIconWeather() {
        for (let i = 0; i < iconsWeather.length; i++){

            let item = Object.keys(iconsWeather[i])
            item = item.toString()

            if(item === props.description) {
                return Object.values(iconsWeather[i])
            }
        }
    }

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
        return Math.round(props.temp)
    }

    return (
        <li className={styles.card}>
            <CardDate
                cardDate={getDateForCard}
                cardDay={getDayForCard}
                cardMonth={getMonthForCard}
            />
            <img className={styles.icon} src={getIconWeather()} alt="Солнечно"/>
            <p className={styles.temperature}> {getTempForCard()}&deg;</p>
        </li>
    )
}

export default Card;