import styles from './SuggestStyles.module.css';
import { FaStar } from "react-icons/fa";
import React, { useState } from 'react';

function Suggest() {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <section id="suggestions" className={styles.container}>
            <h1 className='sectionTitle'>SUGGESTIONS</h1>
            <form name="suggestions" className={styles.suggestionsForm} data-netlify="true" action="">
                <input type="hidden" name="form-name" value="suggestions" />
                <div className={styles.ratingContainer}>
                    <p className={styles.rateText}>Rate:</p>
                    {[...Array(5)].map((star, index) => {
                        const currentRate = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    className={styles.starInput}
                                    type="radio"
                                    name="rate"
                                    value={currentRate}
                                    onClick={() => setRating(currentRate)}
                                />
                                <FaStar
                                    className={styles.star}
                                    size={50}
                                    color={currentRate <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    onMouseEnter={() => setHover(currentRate)}
                                    onMouseLeave={() => setHover(null)}
                                />
                            </label>
                        );
                    })}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="suggestion" hidden>Suggestion</label>
                    <textarea
                        className={styles.formTextarea}
                        id="suggestion"
                        name="suggestion"
                        placeholder="Your Suggestion"
                        required
                    ></textarea>
                </div>
                <input type="submit" className={`${styles.submitBtn} hover btn`} value="Submit" />
            </form>
        </section>
    );
}

export default Suggest;