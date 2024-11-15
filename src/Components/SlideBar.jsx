import React, { useState } from 'react';
import './SlideBar.css'
import mySvg from '../assets/s.svg';
import cross from '../assets/cross.svg';
import x from '../assets/x.svg';
import f from '../assets/f.svg';
import w from '../assets/w.svg';
import l from '../assets/l.svg';
import pes from '../assets/pes.png';
import vid from '../assets/vid.mp4';
import img1 from '../assets/box-1.png';
import img2 from '../assets/box-2.png';
import img3 from '../assets/box-3.png';
import img4 from '../assets/box-4.png';
import img5 from '../assets/box-5.png';
import img6 from '../assets/box-6.png';
import img7 from '../assets/box-7.png';
import img8 from '../assets/box-8.png';


function SlideBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    

    return(<>
    <video autoPlay loop muted className="background-video" >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="sidebar-toggle" onClick={toggleSidebar}>
        <img src={mySvg} alt="My SVG" />
    </div>
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
        <div className="sidebar-header">
            <img src="" alt="" />
            <div className="close-btn" onClick={toggleSidebar}>
                <img src={cross} alt="My SVG" />
            </div>
        </div>
        <ul className="Links">
            <li>
                <a href="./">Home</a>
            </li>
            <li>
                <a href="./">Know All the Clubs</a>
            </li>
            <li>
                <a href="./">Events</a>
            </li>
            <li>
                <a href="./">about</a>
            </li>
            <li>
                <a href="./">contact</a>
            </li>
        </ul>
        <ul className="social-icons">
            <li>
                <a href="https://www.twitter.com">
                    <img src={x} alt="My SVG" />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com">
                    <img src={f} alt="My SVG" />
                </a>
            </li>
            <li>
                <a href="https://web.whatsapp.com/">
                    <img src={w} alt="My SVG" />
                </a>
            </li>
            <li>
                <a href="https://in.linkedin.com/">
                    <img src={l} alt="My SVG" />
                </a>
            </li>
        </ul>
    </aside>
    <div className="pes">
        <img src={pes} className='pes-img'/>
    </div>

    <div className="navbar">
        <div className="events nav">Events</div>
        <div className="podcast nav">Podcast</div>
        <div className="festivals nav">Festivals</div>
    </div>

    <div className="container">
        <div className="container-1">
            <div className="box-1 box"><img src={img1}/></div>
            <div className="box-2 box"><img src={img2}/></div>
            <div className="box-3 box"><img src={img3}/></div>
            <div className="box-4 box"><img src={img4}/></div>
        </div>
        <div className="container-2">
            <div className="box-5 box"><img src={img5}/></div>
            <div className="box-6 box"><img src={img6}/></div>
            <div className="box-7 box"><img src={img7}/></div>
            <div className="box-8 box"><img src={img8}/></div>
        </div>
    </div>
    </>);
}

export default SlideBar;