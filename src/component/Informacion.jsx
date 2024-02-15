const Informacion = ({tituloSecundario,anioActualProps}) => {
  return (
    <section>
      <h2>Conceptos basicos de react {anioActualProps}</h2>
      <h3>{tituloSecundario}</h3>
      <p>
        React (también llamada React.js o ReactJS) es una librería Javascript de
        código abierto diseñada para crear interfaces de usuario con el objetivo
        de facilitar el desarrollo de aplicaciones en una sola página. Es
        mantenido por Facebook y la comunidad de software libre. En el proyecto
        hay más de mil desarrolladores libres.
      </p>
      <ol className="list-group" >
        <li className="list-group-item">
          Los componentes permiten separar la interfaz de usuario en piezas
          independientes, reutilizables y pensar en cada pieza de forma aislada
        </li>
        <li className="list-group-item">
          Las props son la colección de datos que un componente recibe del
          contenedor padre, y que pueden usarse para definir los elementos de
          React que retornará el componente. En términos prácticos, si un
          componente necesita recibir información para funcionar, la recibe vía
          props.
        </li>
        <li className="list-group-item">
          state representan los valores renderizados, es decir, lo que hay
          actualmente en la pantalla.
        </li>
        <li className="list-group-item">
          el término “ciclo de vida” o lifecycle , se refiere a las diferentes
          fases por los que pasa un componente desde su creación hasta su
          destrucción.
        </li>
        <li className="list-group-item">
          JSX (JavaScript XML) es una extensión sintáctica para JavaScript que
          permite a los desarrolladores escribir código similar al HTML dentro
          de un archivo JavaScript.
        </li>
      </ol>
    </section>
  );
};

export default Informacion;
