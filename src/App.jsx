import Informacion from "./component/Informacion"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <section className="container my-4" >
      <h1 className="text-center display-3" >PrimerApp react</h1>
      <Informacion tituloSecundario="Este titulo fue creado con un props"></Informacion>
    </section>
    
  )
}

export default App
