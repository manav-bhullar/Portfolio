/* eslint-disable no-unused-vars */

import styles from './HeroStyles.module.css'
import heroImg from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/heroImg.png'
import themeIcon from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/sun.svg'
import xIcon from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/twitter-light.svg'
import linkedinIcon from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/linkedin-light.svg'
import githubIcon from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/github-light.svg'
import CV from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/cv.pdf'
import {useTheme} from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/common/ThemeContext.jsx'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profic Pic" />

                <img src={themeIcon} alt="Dark mode icon" />
                
            </div>

            <div className={styles.info}>
                <h1>
                    Manav
                    <br />
                    Bhullar
                </h1>
                <h2>Full stack Web developer</h2>
                <span>
                    <a href="https://x.com/ManavBhullar8" target='_blank'>
                        <img src={xIcon} alt="Twitter Icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/manav-bhullar-a27a0b282" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>

                    <a href="https://github.com/manav-bhullar" target='_blank'>
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                </span>

                <p>
                    I am MANAV a Full stack web developer and a tech enthusiast.
                </p>

                <a href={CV} target='_blank'>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;