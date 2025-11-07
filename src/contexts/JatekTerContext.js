import { createContext } from 'react';
import { useState } from 'react';

export const JatekTerContext=createContext("")

export const JatekTerProvider=({children})=>{
    const [lista, setLista]=useState(["", "", "", "", "", "", "", "", ""])
    const [allapot, setAllapot] = useState("X")
    const [lepes, setLepes] = useState(1)
    function kattintas(index) {
        console.log(index);
        const sl=[...lista]
        sl[index]=allapot
        let sa = allapot
        if (sa==="X") {
        setAllapot("O")
        }else{
        setAllapot("X")
        }
        setLista([...sl])
        console.log(lista)

        let slepes = lepes
        slepes ++
        setLepes(slepes)
    }
    return <JatekTerContext.Provider value={{lista, allapot, lepes, kattintas}}>
        {children}
    </JatekTerContext.Provider>
}