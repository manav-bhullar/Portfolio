import styles from './HeroStyles.module.css';
import heroImg from '../../src/assets/My first design 4 (3).png';
import CV from '../../src/assets/cv.pdf';
import { useTheme } from '../../src/common/ThemeContext';
import { FaSun, FaMoon, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = {
  twitter: 'https://x.com/ManavBhullar8',
  linkedin: 'https://www.linkedin.com/in/manav-bhullar-a27a0b282',
  github: 'https://github.com/manav-bhullar',
};

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

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
        <span className={styles.socialIcons}>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </span>

        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className="hover">Resume</button>
        </a>
      </div>

      <div className={styles.themeIconContainer} onClick={toggleTheme}>
        {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
      </div>
    </section>
  );
}

export default Hero;