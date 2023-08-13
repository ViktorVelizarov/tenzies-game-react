import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"

export default function App(){

    const[dice, setDice] = React.useState(generateDices())
    const[tenzies, setTenzies] = React.useState(false)
    
    React.useEffect(() => {
        const firstValue = dice[0].value;
        const allHeld = dice.every(die => die.isHeld)
        const sameNumber = dice.every(die => die.value === firstValue)
        if( allHeld && sameNumber){
            setTenzies(true)
        }
    },[dice])
    
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
    
    function HoldDice(id){
       setDice(prev => prev.map(item => {
        return item.id === id ?
        {...item, isHeld: !item.isHeld} :
        item
       }))
    }

    
    function resetDice(){
        if(tenzies === false)
        {
            setDice(prev => prev.map(item => {
                return item.isHeld === false ?
                {value: Math.floor(Math.random() * 6) + 1,
                    isHeld: false,
                    id: nanoid()} :
                item
            }))
        }
        if(tenzies === true)
        {   setTenzies(false)
            setDice(prev => prev.map(item => {
                return{value: Math.floor(Math.random() * 6) + 1,
                    isHeld: false,
                    id: nanoid()}
            }))
        }
    }

   const diceElements = dice.map(die => (
      <Die key={die.id}
      value={die.value} 
      isHeld={die.isHeld}
      id={die.id}
      HoldDice = {() => HoldDice(die.id)} />
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
               <button onClick={resetDice}>{tenzies ? "Play Again" : "Roll"}</button>
            </div>       
        </main>
        </div>
    )
}