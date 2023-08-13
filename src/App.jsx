import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App(){

    const[dice, setDice] = React.useState(generateDices())
    
    function fillDiceData(){
       return{
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid()
       }
    }

    function generateDices(){
        const arr = []
        for(let i = 0; i < 10; i++)
        {
            arr[i] = fillDiceData();
        }
        return arr
    }
    
    function HoldDice(){
        console.log("hold")
    }

   const diceElements = dice.map(die => (
      <Die key={die.id}
      value={die.value} 
      isHeld={die.isHeld}
      id={die.id}
      HoldDice = {HoldDice} />
   )
   )
   
    console.log(dice.value)
    return(
        <div className="centreItems">
        <main>
            <div className="diceContainer"> 
               <div className="diceHolder">
                {diceElements}
               </div>
               <button onClick={() => setDice(generateDices)}> Roll</button>
            </div>       
        </main>
        </div>
    )
}