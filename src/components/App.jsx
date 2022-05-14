import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {useEffect, useState} from "react";
import axios from "axios";

const API_KEY = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.3&lon=104.3&units=metric&&lang=ru&appid=64caa5601a72cd6bc9eb103f1d7c6a04'

function App() {
    const [dataWeather, setDataWeather] = useState([]);

    useEffect( () => {
        axios.get(API_KEY)
            .then((res) => {
                return setDataWeather(res.data.daily)
            })
            .catch(err => alert(err))
        }, [])

    return (
      <>
          <Header/>
          <Main
              dataWeather={dataWeather}
          />
          <Footer/>
      </>
  )
}

export default App;
