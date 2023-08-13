import React from "react"
import Die from "./Die"

export default function App(){

    const[dice, setDice] = React.useState([])
    
    function giveDiceNumbers(){
       return Math.floor(Math.random() * 6) + 1
    }
    return(
        <div className="centreItems">
        <main>
            <div className="diceContainer"> 
               <div className="diceHolder">
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               <Die value={giveDiceNumbers()}/>
               </div>
               <button> Roll</button>
            </div>       
        </main>
        </div>
    )
}