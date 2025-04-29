import React from 'react'
import filmicon from '../assets/images/film_icon.png'
import logo from '../assets/images/logo.svg'
import home from '../assets/images/home.png'
import film from '../assets/images/film.png'
import series from '../assets/images/tv.png'
import cartoon from '../assets/images/cartoon.png'
import collection from '../assets/images/collection.png'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header_top">
          <img className="header_top_img" src={filmicon} alt="" />
          <p className="header_top_text">See no special offer restrictions</p>
        </div>
        <nav className="nav">
          <div className="container">
            <div className="nav_box">
              <a href="#!" className="nav_logo">
                <img src={logo} alt="" />
                <span>CINEMAS</span>
              </a>
              <ul className="nav_list">
                <li><a href="#film" className="nav_link"><span>Films</span></a></li>
                <li><a href="#series" className="nav_link"><span>Serials</span></a></li>
                <li><a href="#" className="nav_link"><span>Cartoons</span></a></li>
                <li><a href="#collect" className="nav_link"><span>Collections</span></a></li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="nav_mobile">
              <li><a href="#" className="nav_mobile_link">
                <img src={home} alt="" />
                <span>Main</span>
              </a></li>
              <li><a href="#film" className="nav_mobile_link">
                <img src={film} alt="" />
                <span>Films</span>
              </a></li>
              <li><a href="#series" className="nav_mobile_link">
                <img src={series} alt="" />
                <span>Serials</span>
              </a></li>
              <li><a href="#!" className="nav_mobile_link">
                <img src={cartoon} alt="" />
                <span>Cartoons</span>
              </a></li>
              <li><a href="#collect" className="nav_mobile_link">
                <img src={collection} alt="" />
                <span>Collections</span>
              </a></li>
            </ul>
          </div>
        </nav>
        <div className="intro">
          <div className="container">
            <h1 className="intro_title">Kong: Skull Island</h1>
            <p className="intro_text">
              The film takes the viewer to the 70s of the last century. The protagonist organizes an expedition to the Skull island, always covered in fog, on which King Kong was once caught to find the missing brother and some mysterious substance. During...
            </p>
            <div className="intro_btns">
              <button className="btn">Watch now</button>
              <button className="btn intro_btn">Download</button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
