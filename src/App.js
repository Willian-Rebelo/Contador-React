import { useState } from "react";
import './App.css' 

export default function App () {

    let [numero, setNumero] = useState(0)

    function aumentar () {
        setNumero (numero + 1)
    }

    function diminuir () {
        setNumero (numero - 1)
    }
    function zerar () {
        setNumero (numero - numero)
    }

    return <section className="cont">
        <h1 className="t">Contador</h1>
        <p className="n">{numero}</p>
        <button className="bnt" onClick={aumentar}>Mais</button>
        <button className="bnt" onClick={diminuir}>Menos</button>
        <button className="bnt" onClick={zerar}>Zerar</button>
    </section>
    
}