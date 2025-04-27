import React from 'react'
import line from '../assets/images/line.png'
import play from '../assets/images/play.svg'
import one from '../assets/images/1.png'
import two from '../assets/images/2.png'
import three from '../assets/images/3.png'

const Collect = () => {
    return (
        <>
            <section className="collect">
                <div className="container">
                    <h2 className="title">Collections</h2>
                    <div className="collect_box">
                        <div className="collect_card">
                            <img className="collect_img" src={one} alt="" />
                            <img className="collect_left" src={line} alt="" />
                            <img className="collect_right" src={line} alt="" />
                            <a href="#!" className="collect_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="collect_title">All Marvel Films</h3>
                        </div>
                        <div className="collect_card">
                            <img className="collect_img" src={two} alt="" />
                            <img className="collect_left" src={line} alt="" />
                            <img className="collect_right" src={line} alt="" />
                            <a href="#!" className="collect_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="collect_title">Fast and the Furious</h3>
                        </div>
                        <div className="collect_card">
                            <img className="collect_img" src={three} alt="" />
                            <img className="collect_left" src={line} alt="" />
                            <img className="collect_right" src={line} alt="" />
                            <a href="#!" className="collect_play">
                                <img src={play} alt="" />
                            </a>
                            <h3 className="collect_title">Star Wars</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collect
