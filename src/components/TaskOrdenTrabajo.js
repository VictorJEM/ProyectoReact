import {React,useContext} from 'react';
import { Button } from '@mui/material';

import { StepContext } from '../context/FormContext';

const TaskOrdenTrabajo = () => {

    const {tiempo_servicios,datosCliente,datosVehiculo,servicios,setStep,setDatosCliente,setDatosVehiculo,setServicios} = useContext(StepContext);

    const mostrar_servicios = ()=>{
        const servicios_copy = [];
        for(let servicio in servicios ){
            servicios_copy.push(servicios[servicio]);
        }

        const sumar_minutos = () => {
            let contador = 0;
            for(let i = 0 ; i < servicios_copy.length ; i++){
                contador = contador + tiempo_servicios[servicios_copy[i]];
            }
            return contador;
        }
        const tiempo = Date.now();
        const fecha = new Date(tiempo);
        return(
            <>
                <div>
                    {servicios_copy.map((servicio)=>{
                        return (<div>
                            {servicio}
                        </div>);
                    })}
                </div>
                <br></br>
                <div>
                    <b>Fecha: </b>{fecha.toLocaleString()}
                    <br/><b>Tiempo aproximado de espera: </b> {sumar_minutos()} minutos
                </div>
            </>
        );

    }

    const guardar = () => {
        setDatosCliente([]);
        setDatosVehiculo([]);
        setServicios([]);
        setStep(1);
    }

    return (
        <div>
            <h1>RESUMEN</h1>
            <div>
                <b>Nombres: </b>{datosCliente['nombres']}
            </div>
            <div>
                <b>Apellidos: </b>{datosCliente['apellidos']}
            </div>
            <div>
                <b>Email: </b>{datosCliente['email']}
            </div>
            <div>
                <b>Contacto: </b>{datosCliente['contacto']}
            </div>
            <div>
                <b>Cedula: </b>{datosCliente['cedula']}
            </div>
            <div>
                <b>Marca Vehículo: </b>{datosVehiculo['marca']}
            </div>
            <div>
                <b>Modelo Vehículo: </b>{datosVehiculo['modelo']}
            </div>
            <div>
                <b>Placa: </b>{datosVehiculo['placa']}
            </div>
            <div>
                <b>Nivel Tanque Gasolina: </b>{datosVehiculo['nivel_gasolina']}
            </div>
            <div>
                <b>Observaciones: </b>{datosVehiculo['observaciones']}
            </div>
            <h2>Servicios</h2>
            {mostrar_servicios()}
            <div>
                <br/><Button variant="contained" onClick={()=>{
                    guardar();
                }} >Guardar</Button>
                
            </div>
            <br></br><br></br>
        </div>
    );
}

export default TaskOrdenTrabajo;