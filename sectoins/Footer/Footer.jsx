import styles from "./FooterStyles.module.css"

function Footer() {
    return (
        <footer id="footer" className={styles.container} >
            <p>&copy; 2024 Manav Bhullar. <br />
            All rights reserved.
            </p>
        </footer>
    )
}
export default Footer;