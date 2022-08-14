import styles from "../styles/main.module.scss";
import React, {useEffect, useState} from "react";

const CardDate: React.FC<any> = ({cardDate, cardDay, cardMonth}) => {
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('')

    useEffect(() => {
        setDate(cardDate);
        setDay(cardDay)
        setMonth(cardMonth)
    },[])

    return(
        <>
            <div className={styles.week}>
                <p className={styles.weekDay}>{day}</p>
            </div>
            <div className={styles.dateWrapper}>
                <h2 className={styles.date}>{date}</h2>
                <p className={styles.month}>{month}</p>
            </div>
        </>
    )
}

export default CardDate;