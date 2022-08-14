import styles from '../styles/main.module.scss'
import city from '../images/city.svg'
import Card from "./Card";
import LoadingCards from "./LoadingCards";
import React from "react";
import cloudsSun from "../images/iconsWeather/clouds-sun.svg";
import rainSun from "../images/iconsWeather/rainSun.svg";
import rain from "../images/iconsWeather/rain.svg";
import sun from "../images/sun.svg";

type mainType = any;

const Main:React.FC<mainType> = ({dataWeather}) => {

    const iconsWeather = [
        {name: 'небольшая облачность', icon: cloudsSun},
        {name: 'небольшой дождь', icon: rainSun},
        {name: 'дождь', icon: rain},
        {name: 'пасмурно', icon: cloudsSun},
        {name: 'переменная облачность', icon: sun},
        {name: 'облачно с прояснениями', icon: cloudsSun},
        {name: 'ясно', icon: sun}
    ]

    // убираем 8 карточку из запроса
    const data = dataWeather.slice(0, -1);
    const weekWeather = data.map((item: any) => {
        return {
            date: item.dt,
            clouds: item.clouds,
            temp: item.temp,
            weather: iconsWeather.find((obj: any) => obj.name === item.weather[0].description)
        }
    })

    // проверяем, получили ли мы данные для заполнения карточек
    const isLoadingCards = weekWeather.length === 0;

    return (
        <main className={styles.main}>
            <img className={styles.city} src={city} alt="Город"/>
            <div className={styles.border}>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.cards}>
                    {isLoadingCards ? <LoadingCards/> :
                        weekWeather.map((dayWeather: any, index: any) => {
                        return (
                            <Card
                                    key={index}
                                    temp={dayWeather.temp.day}
                                    date={dayWeather.date}
                                    weather={dayWeather.weather}
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