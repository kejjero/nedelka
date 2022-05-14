import styles from '../styles/main/main.module.scss'
import city from '../images/city.svg'
import Card from "./Card";

function Main (props) {
    return (
        <main className={styles.main}>
            <img className={styles.city} src={city} alt="Город"/>
            <div className={styles.border}>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.cards}>
                    {props.dataWeather.map((data) => {
                        return (
                            <Card
                                key={data.key}
                                temp={data.temp.day}
                                weather={data.weather[0].description}
                            />
                        )
                    })
                    }
                </ul>
            </div>
        </main>
    )
}

export default Main;