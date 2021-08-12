import React, {useState} from 'react';
import { Header } from "./components/Header";
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';


//Emotion para Styled Components
//Anumaciones con Transition group

const Contenedor = styled.div`
  min-width: 600px;
  margin: 1rem auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  border: 1px solid #00838F ;
  padding: 3rem;
`

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      año: '',
      plan: ''
    }
  })

  const [cargando, guardarCargando] = useState(false)

  //Extraer datos
  const {cotizacion, datos:datosResumen} = resumen
  console.log(cotizacion)
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros"/>
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}  
          guardarCargando={guardarCargando}
        />
       
        {cargando ? <Spinner/> : null}

        
        {!cargando ? (<>
        <Resumen datos={datosResumen}/>
        <Resultado cotizacion={cotizacion}/>
        </>) : null}
        
      </ContenedorFormulario>
    </Contenedor>

  );
}

export default App;
