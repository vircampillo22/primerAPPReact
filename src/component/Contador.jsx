import { useState } from "react";

const Contador = () => {
    //let numero=10;
const[numero, setNumero]=useState(10);

    return (
        <article className="text-center mt-4">
            <h3>Contador</h3>
            <p className="fw-bold">{numero}</p>
            <button className="btn btn-primary"onClick={()=>setNumero(numero+1g) }>+1</button>
        </article>
        


    );
};

export default Contador;