import React from "react"

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "yellow" : "white"
    }
    return(
        <div className="dice" onClick={props.HoldDice} style={styles}>
            <h1>{props.value}</h1>
        </div>
    )
}