import styles from '../styles/main.module.scss'
import city from '../images/city.svg'
import Card from "./Card";

function Main (props) {
    // убираем 8 карточку из запроса
    const dataWeather = props.dataWeather.slice(0, -1);

    return (
        <main className={styles.main}>
            <img className={styles.city} src={city} alt="Город"/>
            <div className={styles.border}>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.cards}>
                    {dataWeather.map((data) => {
                        return (
                                <Card
                                    key={data.dt}
                                    temp={data.temp.day}
                                    date={data.dt}
                                    description={data.weather[0].description}
                                />
                            )}
                        )
                    }
                </ul>
            </div>
        </main>
    )
}

export default Main;