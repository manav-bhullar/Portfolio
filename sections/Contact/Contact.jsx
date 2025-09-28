import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form name="contact" className={styles.contactForm} data-netlify="true" action="">
        <input type="hidden" name="form-name" value="contact" />
        <div className={styles.formGroup}>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            className={styles.formInput}
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            className={styles.formTextarea}
            id="message"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <input
          type="submit"
          className={`${styles.submitBtn} hover btn`}
          value="Submit"
        />
      </form>
    </section>
  );
}
export default Contact;