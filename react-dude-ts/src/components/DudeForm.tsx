import React from 'react'
import { useForm} from "react-hook-form";


// Type of Dude
export interface Dude {
    id: number;
    who: string;
    wat: string;
    cool: number;
}

interface DudeForm {
    addDude: (newDude: Dude) => void;
    dudes: Dude[];
}


export const DudeForm: React.FC<DudeForm> = ({addDude, dudes}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => addDude({
        id: Math.max(...dudes.map(d => d.id)) + 1,
        who: data.who,
        wat: data.wat,
        cool: 10
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="who" defaultValue="" ref={register} />
            <input name="wat" ref={register({ required: true })} />
            <button type="submit">Add</button>
        </form>
    )
}

// import React, {ChangeEvent, FormEvent, useState} from 'react'

// export const DudeForm: React.FC<DudeForm> = ({addDude, dudes}) => {
//     const [dude, setDude] = useState({
//         who: '',
//         wat: '',
//     })
//
//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setDude({
//             ...dude,
//             [e.target.name]: e.target.value
//         })
//     }
//     console.log(dude)
//
//     const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         addDude({
//             id: Math.floor((Math.random() * 1000) + (Math.random()*10)),
//             who: dude.who,
//             wat: dude.wat,
//             cool: 40
//         })
//     }
//
//     return (
//         <form >
//             <input
//                 type="text"
//                 placeholder="Enter Who"
//                 name="who"
//                 value={dude.who}
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Enter Who"
//                 name="wat"
//                 value={dude.wat}
//                 onChange={handleChange}
//             />
//             <button type="submit" onClick={handleSubmit}>Add</button>
//         </form>
//
//     )
// }
