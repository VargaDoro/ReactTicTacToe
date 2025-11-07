import { useContext } from "react"
import "./App.css";
import Jatekter from "./components/Jatekter";
import { JatekTerContext } from "./contexts/JatekTerContext";

function App() {
  /*const lista = ["", "", "", "", "", "", "", "", ""];*/
  /*állapotkezelés reactban  - useState hook-ok, statekkel kezeljük az llapotot */
      /*useState hook egy fv aminek a visszatérési értéke egy 2elemú lsta. a lista első elemének az értéke a változó a másidik a változó beállító fv
    a változó értékét mindig a beállító fv-én változtathatjuk */
  const {lista, allapot, lepes} = useContext(JatekTerContext)
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista}/>
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
