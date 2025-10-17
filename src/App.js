import { useState } from "react"
import "./App.css";
import Jatekter from "./components/Jatekter";

function App() {
  /*const lista = ["", "", "", "", "", "", "", "", ""];*/
  /*állapotkezelés reactban  - useState hook-ok, statekkel kezeljük az llapotot */
  const [lista, setLista]=useState(["", "", "", "", "", "", "", "", ""])
  /*useState hook egy fv aminek a visszatérési értéke egy 2elemú lsta. a lista első elemének az értéke a változó a másidik a változó beállító fv
  a változó értékét mindig a beállító fv-én változtathatjuk */
  const [allapot, setAllapot] = useState("X")
  const [lepes, setLepes] = useState(1)
  function katt(index) {
    console.log(index);
    /* statek változtatása:
    1. elmentük az aktuális állapotot 
    2. modositom a zelmentett változot
    3. frissitem a statekuj értékkel*/
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
      {/* hanyadik lépés, ki következik */}
      <aside>
        <p>
          Következő: {allapot}
        </p>
        <p>
          A {lepes}-nél tartunk!
        </p>
      </aside>
    </div>
  );
}

export default App;
