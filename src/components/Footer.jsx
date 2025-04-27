import React from 'react'
import google from '../assets/images/google.svg'
import apple from '../assets/images/apple.svg'

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
            <div className="footer_box">
                <div className="footer_img">
                    <img src={google} alt="" />
                    <img src={apple} alt="" />
                </div>
                <h3 className="footer_title">© PROWEB. В целях обучения 2021</h3>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
