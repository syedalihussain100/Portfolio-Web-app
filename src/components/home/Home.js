import React from 'react'
import Home_css from './home.module.css';
import img from './images/Home.png';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import hello from './images/hello.gif';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className={Home_css.main_div}>
            <Fade left>
                <div className={Home_css.left_div}>
                    <Bounce top>
                        <h4 className={Home_css.left_head1}>Welcome to my portfolio website <span className={Home_css.gif}>   <img src={hello} alt="hello" /></span></h4>

                    </Bounce>
                    <h1 className={Home_css.left_head2}>Hey We Are Developers</h1>

                    <h1 className={Home_css.left_head3}><span style={{ fontSize: '18px', color: '#333' }}>We Are </span>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Front End Developer',
                                1000,
                                'Back End Developer',
                                1000,
                                'Mern Stack Developer',
                                1000,
                                'Full Stack Developer',
                                1000,
                                'Graphics Designer',
                                1000
                            ]}
                        />
                    </h1>
                    <p className={Home_css.left_pera}>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.
                    </p>
                    <Bounce bottom>
                        <Link to="/projects"><button className={Home_css.btn_get}>Get Started</button></Link>
                    </Bounce>
                </div>
            </Fade>

            <Fade right>
                <div className={Home_css.right_div}>
                    <img src={img} alt="Team" className={Home_css.img1} />
                </div>
            </Fade>

        </div>
    )
}

export default Home
