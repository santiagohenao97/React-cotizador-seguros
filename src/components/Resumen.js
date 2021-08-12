import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primerMayuscula } from '../helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 0.5rem;

    & > h2{
        margin: 0.2rem;
    }
`

const Resumen = ({datos}) => {

    const{marca, año, plan} = datos
    if(marca === '' || año === '' || plan === '') return null;
    return ( 
        <ContenedorResumen>
            <h2>Resumen de cotización</h2>
            <ul>
                <li>Marca: {primerMayuscula(marca)}</li>
                <li>Año del modelo: {año}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>

     );
}

Resumen.propTypes ={
    datos: PropTypes.object.isRequired,
}

export default Resumen;