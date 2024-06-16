

import styles from './HeroStyles.module.css'
import sun from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/sun.svg'
import moon from "/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/moon.svg"
import twitterLight from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/twitter-light.svg'
import twitterDark from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/twitter-dark.svg'
import githubLight from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/github-light.svg'
import githubDark from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/github-dark.svg'
import linkedinLight from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/linkedin-light.svg'
import linkedinDark from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/linkedin-dark.svg'
import heroImg from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/heroImg.png'
import CV from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/assets/cv.pdf'
import {useTheme} from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/Portfolio/src/common/ThemeContext.jsx'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon  = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return ( <>
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profic Pic" />

                
                
            </div>
           
            <div className={styles.info}>
                <h1>
                    Manav
                    <br />
                    Bhullar
                </h1>
                <h2> ...</h2>
                <span>
                    <a href="https://x.com/ManavBhullar8" target='_blank'>
                        <img src={twitterIcon} alt="Twitter Icon" />
                    </a>

                    <a href="https://www.linkedin.com/in/manav-bhullar-a27a0b282" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>

                    <a href="https://github.com/manav-bhullar" target='_blank'>
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                </span>

                <p className={styles.description}>
                    A Full stack web developer and a tech enthusiast.
                </p>

                <a href={CV} target='_blank'>
                    <button className='hover'>Resume</button>
                </a>
            </div>

        </section>
            <img src={themeIcon} style={{ width:"45px", position: "fixed", top: "30px", right: "20px"}} alt="Dark mode icon" className='themeIcon' onClick={toggleTheme} />
    </>
    );
}

export default Hero;