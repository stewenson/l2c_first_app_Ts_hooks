// Type of Dude
export interface Dude {
    id: number;
    who: string;
    wat: string;
    cool: number;
}

interface DudesList {
    dude: Dude[];
}
// od rodica cakam funkciu handlecool do ktorej posielam duda typu dude
export type HandleCool = (selectDude: Dude) => void;

export type newDude = (newDude: Dude) => void;


