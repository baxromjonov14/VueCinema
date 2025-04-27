import React from 'react'
import play from '../assets/images/play.svg'

const Series = () => {
    return (
        <>
            <section className="series">
                <div className="container">
                    <h2 className="title">Series</h2>
                    <div className="game">
                        <h2 className="game_title">Game of Thrones</h2>
                        <p className="game_text">The time of prosperity is drawing to a close, and the summer, which lasted almost a decade, is dying away. Around the center of power of the Seven Kingdoms, the Iron Throne, a conspiracy is ripening, and during this difficult time, the king decides to seek support from his youth friend Eddard Stark. In a world where everyone - from the king to the mercenary - is eager for power, intrigues and is ready to stick a knife in the back, there is ...</p>
                        <button className="btn">Watch now</button>
                    </div>
                    <div className="series_box">
                        <div className="series_card">
                            <a href="#!" className="series_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="series_title">Wanda Vision</h3>
                        </div>
                        <div className="series_card">
                            <a href="#!" className="series_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="series_title">The Flash</h3>
                        </div>
                        <div className="series_card">
                            <a href="#!" className="series_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="series_title">The Great</h3>
                        </div>
                        <div className="series_card">
                            <a href="#!" className="series_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="series_title">GOTHAM</h3>
                        </div>
                        <div className="series_card">
                            <a href="#!" className="series_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="series_title">Wanda Vision</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Series
