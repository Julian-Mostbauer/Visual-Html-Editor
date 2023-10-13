import ToggleButton from "./toggleButton";
import { useState } from 'react'

interface Prop {
    func: any;
    count: number;
}

function setStateAtIndex(currentStates:any, index:number, set_fn: (a: any) => void){
    let newStates = [...currentStates]; // create a new copy of the array
    newStates[index] = !newStates[index]; // update the new copy
    set_fn(newStates); // set the new state
}


export default function RadioCollection(props:Prop){
    const monkeys = []; //funny
    const initBools = [];
    for(let i = 0; i < props.count; i++){
        monkeys.push(i)
        initBools.push(false);
    }
    const [currentStates, setStates] = useState(initBools);

    return (
      <ul>
        {monkeys.map(index => (
            <ToggleButton 
            func={() => setStateAtIndex(currentStates, index, setStates)} 
            state={currentStates[index]} 
            style="card"/>
        ))}
      </ul>
    );

}