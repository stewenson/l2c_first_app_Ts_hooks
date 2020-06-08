import React, {useState} from 'react';
import './App.scss';
import {ListOfDudes} from "./components/ListOfDudes";
import {DudeForm} from "./components/DudeForm";

// Type of Dude
interface Dude {
    id: number;
    who: string;
    wat: string;
    cool: number;
}
type HandleCool = (event: any, selectDude: Dude) => void;

export default function App() {

    // Initial will be array of dude = [dude: {id, who, wat, cool}]
    const initialDude: Array<Dude> = [
        {
            id: 1,
            who: 'Finn the Human',
            wat: 'A skilly kid who wants to become a great hero one day.',
            cool: 15
        },
        {
            id: 2,
            who: 'Jake ',
            wat: "Finn's best friend is a wise, old dog with a big heart",
            cool: 69
        }
    ]

  const [dudes, setDudes] = useState(initialDude)

    // New dude
    const addDude = (newDude: Dude) => {
        setDudes([...dudes, newDude])
    }

  //  update cool
  //  handle cool expect (event: any, selectDude: Dude)
    const handleCool: HandleCool = (event: React.ChangeEvent<HTMLInputElement>, selectDude ) => {
        const newCool = +event.target.value // value from child
        // updateDude
        const updateDude = dudes.map(item => {
            // id select dude from child is equal to item from dudes
            if ( selectDude === item) {
                // return item with new cool value
                return {
                    ...item,
                    cool: newCool
                }
            }
            return item;
        })
        // update cool
        setDudes(updateDude)
    }

  //  Remove DUde
    const removeDude = (selectDude: Dude) => {
        const deleteDude = dudes.filter(dude => dude !== selectDude)
        setDudes(deleteDude)
    }


  return (
    <div>
        <ListOfDudes dude={dudes} editCool={handleCool} removeDude={removeDude}/>
        <DudeForm dudes={dudes} addDude={addDude}/>
    </div>
  );
}