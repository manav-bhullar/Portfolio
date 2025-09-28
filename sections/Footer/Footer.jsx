import styles from "./FooterStyles.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className={styles.container}>
      <p className={styles.footerText}>
        &copy; {currentYear} Manav Bhullar. <br />
        All rights reserved.
      </p>
    </footer>
  );
}
export default Footer;