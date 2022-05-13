import styles from '../styles/main/main.module.scss'
import city from '../images/city.svg'
import sun from '../images/sun.svg'
import cloudy from '../images/cloudy.svg'

function Main () {
    return (
        <main className={styles.main}>
            <img className={styles.city} src={city} alt="Город"/>
            <div className={styles.border}>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.cards}>
                   <li className={styles.card}>
                       <div className={styles.week}>
                           <p className={styles.weekDay}>Пн</p>
                       </div>
                       <div className={styles.dateWrapper}>
                           <h2 className={styles.date}>21</h2>
                           <p className={styles.month}>Июня</p>
                       </div>
                       <img className={styles.icon} src={sun} alt="Солнечно"/>
                       <p className={styles.temperature}>+8°</p>
                   </li>
                    <li className={styles.card}>
                        <div className={styles.week}>
                            <p className={styles.weekDay}>Вт</p>
                        </div>
                        <div className={styles.dateWrapper}>
                            <h2 className={styles.date}>22</h2>
                            <p className={styles.month}>Июня</p>
                        </div>
                        <img className={styles.icon} src={cloudy} alt="Солнечно"/>
                        <p className={styles.temperature}>+12°</p>
                    </li>
                    <li className={styles.card}>
                        <div className={styles.week}>
                            <p className={styles.weekDay}>Ср</p>
                        </div>
                        <div className={styles.dateWrapper}>
                            <h2 className={styles.date}>23</h2>
                            <p className={styles.month}>Июня</p>
                        </div>
                        <img className={styles.icon} src={sun} alt="Солнечно"/>
                        <p className={styles.temperature}>+14°</p>
                    </li>
                    <li className={styles.card}>
                        <div className={styles.week}>
                            <p className={styles.weekDay}>Чт</p>
                        </div>
                        <div className={styles.dateWrapper}>
                            <h2 className={styles.date}>24</h2>
                            <p className={styles.month}>Июня</p>
                        </div>
                        <img className={styles.icon} src={cloudy} alt="Солнечно"/>
                        <p className={styles.temperature}>+11°</p>
                    </li>
                    <li className={styles.card}>
                        <div className={styles.week}>
                            <p className={styles.weekDay}>Пт</p>
                        </div>
                        <div className={styles.dateWrapper}>
                            <h2 className={styles.date}>25</h2>
                            <p className={styles.month}>Июня</p>
                        </div>
                        <img className={styles.icon} src={cloudy} alt="Солнечно"/>
                        <p className={styles.temperature}>+13°</p>
                    </li>
                    <li className={styles.card}>
                        <div className={styles.week}>
                            <p className={styles.weekDay}>Сб</p>
                        </div>
                        <div className={styles.dateWrapper}>
                            <h2 className={styles.date}>26</h2>
                            <p className={styles.month}>Июня</p>
                        </div>
                        <img className={styles.icon} src={sun} alt="Солнечно"/>
                        <p className={styles.temperature}>+17°</p>
                    </li>
                    <li className={styles.card}>
                        <div className={styles.week}>
                            <p className={styles.weekDay}>Вс</p>
                        </div>
                        <div className={styles.dateWrapper}>
                            <h2 className={styles.date}>27</h2>
                            <p className={styles.month}>Июня</p>
                        </div>
                        <img className={styles.icon} src={sun} alt="Солнечно"/>
                        <p className={styles.temperature}>+11°</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Main;