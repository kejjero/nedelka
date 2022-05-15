import styles from "../styles/main.module.scss";
import {useEffect, useState} from "react";

function CardDate (props) {
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('')

    useEffect(() => {
        setDate(props.cardDate);
        setDay(props.cardDay)
        setMonth(props.cardMonth)
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