import styles from '../styles/main.module.scss'
import city from '../images/city.svg'
import Card from "./Card";
import LoadingCards from "./LoadingCards";

function Main (props) {
    // убираем 8 карточку из запроса
    const dataWeather = props.dataWeather.slice(0, -1);

    const isLoadingCards = props.dataWeather.length === 0;
    console.log(isLoadingCards)
    return (
        <main className={styles.main}>
            <img className={styles.city} src={city} alt="Город"/>
            <div className={styles.border}>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.cards}>
                    {isLoadingCards ? <LoadingCards/> :
                        dataWeather.map((data) => {
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