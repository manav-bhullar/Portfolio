import styles from '/Users/manav/Library/CloudStorage/OneDrive-thapar.edu/Codes/Portfolio/sectoins/Contact/ContactStyles.module.css';


function Contact() {
    return(
        <section id="contact" className={styles.container} >
            <h1 className='sectiontitle'>Contact</h1>
            <form action="">
                <div className='formGroup'>
                    <label htmlFor="name" hidden>Name</label>
                    <input type="text" id="name" name="name" placeholder='Name' required/>
                </div>
                
                <div className='formGroup'>
                    <label htmlFor="Email" hidden>Email</label>
                    <input type="text" id="email" name="email" placeholder='Email Address' required/>
                </div>
                
                <div className='formGroup'>
                    <label htmlFor="message" hidden>Message</label>
                    <textarea type="text" id="message" name="message" placeholder='Your Message' required></textarea>
                </div>

                <input type="submit" name="" id="" className='hover btn' value="Submit" />
            </form>
        </section>
    )
}
export default Contact;