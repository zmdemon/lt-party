import React from 'react'
import {NavLink} from 'react-router-dom'


export const LandingPage = () => {

    return (
        <div>
            <header>
                <nav>
                    <span>@lvparty_</span>
                    <button>Ввести код</button>
                </nav>
            </header>
            <body>
            <div className="video-timer-div">
                <div className="page-title">
                    <h3>LV Party 19</h3>
                    <h4>Лето. Ночь. Питер.</h4>
                </div>
                <div className="timer">
                    24:59:59
                </div>
                <div className="button-div">
                    <button>Ввести код</button>
                </div>
            </div>
            <div className="gallery-carousel-div">
            </div>
            <div className="youtube-video-div">
            </div>

            <div className="description-div">
                <h4>
                    21.00 | 19 ИЮНЯ | ШЕРЕМЕТЬЕВСКИЙ ДВОРЕЦ
                </h4>
                <h3>
                    LV PARTY
                </h3>
                <p>
                    - это интерактивные вечеринки, сформировавшие сообщество самой яркой молодёжи Петербурга
                </p>
                <p>
                    Пройдите фейс контроль и получите свой код для покупки билета в нашем инстаграме: @lvparty_
                </p>
            </div>
            <div className="code-form-div">
                <form action="" className="code-form">
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
            </body>
            <footer>
                <NavLink to={"/ticketbuy"}>Купить билет</NavLink>
                <h3>Это футер</h3>
            </footer>

        </div>
    )
}
