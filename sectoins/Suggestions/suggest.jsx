import styles from './SuggestStyles.module.css'
import { FaStar } from "react-icons/fa"
import React from 'react';


function Suggest () {
    const [rating, setRating] = React.useState(null);
    const [rateColor, setColor] = React.useState(null);
    return (
        <sections className={styles.container}>
            <h1 className='sectiontitle'>SUGGESTIONS</h1>
            <form action="">
                <div className='rating-container'>
                <p className='rate'>Rate:</p>
                    {[...Array(5)].map((star, index) => {
                        const currrentRate = index +1;
                        return (
                            <>
                            <label >
                            <input type="radio"  name="rate" id="Star" className="starInput"
                            value={currrentRate}
                            onClick = {() => setRating(currrentRate)}
                            />
                            <div className='hover-star'>
                            <FaStar size={50}
                            color={currrentRate <= (rateColor || rating) ? "#ffc107" : "#e4e5e9"}
                            />
                            </div>  
                            </label>
                            </>
                        )
                    })}
                    
                </div>
            </form>
        </sections>
    )
}

export default Suggest;