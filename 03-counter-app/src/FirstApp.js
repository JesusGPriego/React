//import React, { Fragment } from "react";
import React from "react";
import PropTypes from "prop-types";

const FirstApp = ({ greeting, subtitle }) => {
  const saludo = "Hola mundo";
  const persona = {
    nombre: "Jesús",
    edad: 28,
  };
  console.log(greeting);
  return (
    // <div>
    //   <h1>Hola mundo</h1>
    //   <p>Ésta es mi primera app</p>
    // </div>
    // <Fragment>
    //   <h1>Hola mundo</h1>
    //   <p>Ésta es mi primera app</p>
    // </Fragment>

    <>
      {/* <pre>{JSON.stringify(persona, null, 3)}</pre> */}
      {/* <h1>{saludo}</h1>*/}
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  greeting: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  greeting: "Hello world",
  subtitle: "I am a subtitle",
};

export default FirstApp;
