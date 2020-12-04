import React from "react"
import {TakeNum} from "./TakeNum"

export const Home = (props) => {
    
    const bakers = ["Anita", "Ginger", "Dusty", "Josephine"]

    

    return (
    <>
     <h1>Welcome to Bay and Marble Doughnut Shoppe, {props.user.name}</h1>
     <p>We have lovely doughnuts made by an awesome team of bakers</p>

     <h2>Our Bakers</h2>
        <ul>
            {bakers.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        
        <TakeNum />
     </>
    )
}   