import styles from './HeroStyles.module.css';
import sun from '../../src/assets/sun.svg';
import moon from '../../src/assets/moon.svg';
import twitterLight from '../../src/assets/twitter-light.svg';
import twitterDark from '../../src/assets/twitter-dark.svg';
import githubLight from '../../src/assets/github-light.svg';
import githubDark from '../../src/assets/github-dark.svg';
import linkedinLight from '../../src/assets/linkedin-light.svg';
import linkedinDark from '../../src/assets/linkedin-dark.svg';
import heroImg from '../../src/assets/My first design 4 (3).png';
import CV from '../../src/assets/cv.pdf';
import { useTheme } from '../../src/common/ThemeContext';

const socialLinks = {
  twitter: 'https://x.com/ManavBhullar8',
  linkedin: 'https://www.linkedin.com/in/manav-bhullar-a27a0b282',
  github: 'https://github.com/manav-bhullar',
};

const icons = {
  light: {
    twitter: twitterLight,
    github: githubLight,
    linkedin: linkedinLight,
    theme: sun,
  },
  dark: {
    twitter: twitterDark,
    github: githubDark,
    linkedin: linkedinDark,
    theme: moon,
  },
};

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcons = icons[theme];

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile Pic" />
      </div>

      <div className={styles.info}>
        <h1>
          Manav
          <br />
          Bhullar
        </h1>
        <h2>A Full stack web developer and a tech enthusiast.</h2>
        <span>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <img src={themeIcons.twitter} alt="Twitter Icon" />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <img src={themeIcons.linkedin} alt="Linkedin Icon" />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <img src={themeIcons.github} alt="Github Icon" />
          </a>
        </span>

        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>

      <div className={styles.themeIconContainer} onClick={toggleTheme}>
        <img
          className={styles.themeIcon}
          src={themeIcons.theme}
          alt="Dark mode icon"
        />
      </div>
    </section>
  );
}

export default Hero;