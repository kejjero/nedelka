import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PopupForCards from "./PopupForCards";

const API_KEY = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.3&lon=104.3&units=metric&&lang=ru&appid=e7f9ffbb9d7df7543738dd76dff67bc7'

const App: React.FC = () => {
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
          <Header

          />
          <Main
              dataWeather={dataWeather}
          />
          <Footer/>
          <PopupForCards/>
      </>
  )
}

export default App;
