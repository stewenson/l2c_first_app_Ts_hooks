import React from 'react'

export interface Dude {
    id: number;
    who: string;
    wat: string;
    cool: number;
}

interface DudesList {
   dude: Dude[];
   editCool: (event: any, selectDude: Dude) => void;
   removeDude: (selectDude: Dude) => void;
}

export const ListOfDudes: React.FC<DudesList> = ({dude, editCool, removeDude}) => {

    return (
        <React.Fragment>
            {dude.map(dude => (
                <ul key={dude.id}>
                    <li className="dude">
                        <p className="ctrl" onClick={() => removeDude(dude)}>
                            x
                        </p>

                        <article
                            className={
                                dude.cool < 10 ? 'faded' : dude.cool > 50 ? 'gold' : ''
                            }
                        >
                            {dude.who}
                            <span>{dude.wat}</span>
                        </article>

                        <input
                            type="number"
                            className="ctrl"
                            onChange={(event) => editCool(event, dude)}
                            value={dude.cool}/>

                    </li>
                </ul>
            ))}
        </React.Fragment>
    )
}