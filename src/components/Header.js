import React from "react";
import "../styles/Header.scss"
import logo from "../images/header__logo.svg"

function Header () {
    return (
        <div className={"header__wrapper"}>

            <a className={"header__contain-logo"} href={"#"}>
                <img className={"header__logo"} src={logo} alt="Логотип"/>
                <div className={"header__contain-logo-text"}>
                    <h1 className={"header__text-logo"}>Неделька</h1>
                    <p className={"header__mini-text-logo"}>прогноз погоды</p>
                </div>
            </a>

            <nav className={"header__regions"}>
                <p className={"header__regions-text"}>
                    Россия > Иркутская область > Иркутск
                </p>
            </nav>
        </div>
    )
}

export default Header;