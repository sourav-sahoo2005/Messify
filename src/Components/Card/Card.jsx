import React from 'react'
import './Card.css'

const Card = () => {
    return (

        <div class="mess-card">
            <div class="mess-name">🏠Lenka Mess</div>

            <div class="info">
                📍 <b>Location:</b><br/>
                    Santikanan Road, Balasore
            </div>

            <div class="info">
                👥 <b>Total Strength:</b> 100
            </div>

            <div class="info highlight">
                🚪 <b>Vacancy Available:</b> 21
            </div>
            <button class="visit-btn">View More Details</button>


        </div>
    )
}

export default Card
