import React from 'react'
import widowtitle from '../assets/images/widow_title.png'
import video from '../assets/videos/widow.mp4'

const Widow = () => {
    return (
        <>
            <section className="widow">
                <div className="container">
                    <img className="widow_title" src={widowtitle} alt="" />
                    <p className="widow_text">After the events at the Leipzig-Halle airport, Natasha was overtaken by the mistakes of the past. The Red Room again made itself felt - a program to create Widows - professional killers and spies - just like her. Natasha decides once and for all to deal with people whose efforts she herself became a Widow.</p>
                    <button className="btn">Watch now</button>
                </div>
                <video  className="widow_video" src={video} autoPlay muted ></video>
            </section>
        </>
    )
}

export default Widow
