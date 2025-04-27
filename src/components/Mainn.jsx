import React from 'react'
import play from '../assets/images/play.svg'

const Mainn = () => {
    return (
        <>
            <main>
                <section className="film">
                    <div className="container">
                        <h2 className="title">films</h2>
                        <div className="film_box">
                            <div className="film_card">
                                <a href="#!" className="film_play">
                                    <img src={play} alt="" />
                                </a>
                                <p className="film_time">2:14:33</p>
                                <h2 className="film_title">Black Panther</h2>
                                <p className="film_text">At first glance, you can decide that Wakanda is an ordinary territory of wild Africa, but this is not so. Here, in the bowels of the desert lands, there are hidden deposits of a unique metal capable of absorbing...
                                </p>
                            </div>
                            <div className="film_card">
                                <a href="#!" className="film_play">
                                    <img src={play} alt="" />
                                </a>
                                <p className="film_time">2:32:13</p>
                                <h2 className="film_title">The Dark Knight</h2>
                                <p className="film_text">Batman raises stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of crime that is poisoning the city. The cooperation is effective, but soon they...</p>
                            </div>
                            <div className="film_card">
                                <a href="#!" className="film_play">
                                    <img src={play} alt="" />
                                </a>
                                <p className="film_time">1:53:45</p>
                                <h2 className="film_title">The Gentlemen</h2>
                                <p className="film_text">One cunning American, from his student years, had been selling drugs, and now he came up with a scheme of illegal enrichment using the estates of an impoverished English aristocracy and made a very good fortune on ...</p>
                            </div>
                            <div className="film_card">
                                <a href="#!" className="film_play">
                                    <img src={play} alt="" />
                                </a>
                                <p className="film_time">2:58:20</p>
                                <h2 className="film_title">The Lord of the...</h2>
                                <p className="film_text">Tales of Middle-earth is a chronicle of the Great War for the Ring, a war that lasted more than one thousand years. The one who owned the Ring received power over all living creatures, but was obliged to serve evil...</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Mainn
