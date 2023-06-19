import {React,useContext} from 'react';

import {Button, TextField} from '@mui/material';

import { StepContext } from '../context/FormContext';

const TaskDatosVehiculo = () => {

    const {setStep,datosVehiculo,setDatosVehiculo} = useContext(StepContext);

    return (
        <div>
            <h2>Datos Vehículo</h2>
            <div>
                <TextField label="Marca" value={datosVehiculo['marca']} onChange={(e)=>setDatosVehiculo({...datosVehiculo, 'marca':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Modelo" value={datosVehiculo['modelo']} onChange={(e)=>setDatosVehiculo({...datosVehiculo, 'modelo':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Placa" value={datosVehiculo['placa']} onChange={(e)=>setDatosVehiculo({...datosVehiculo, 'placa':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Nivel Tanque Gasolina" value={datosVehiculo['nivel_gasolina']} onChange={(e)=>setDatosVehiculo({...datosVehiculo, 'nivel_gasolina':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Observaciones Estado Vehículo" value={datosVehiculo['observaciones']} onChange={(e)=>setDatosVehiculo({...datosVehiculo, 'observaciones':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <Button variant="contained" onClick={()=>{setStep(1)}} color="secondary">Regresar</Button><span> </span>
                <Button variant="contained" onClick={()=>{setStep(3)}} >Siguiente</Button>
            </div>
        </div>
    );
}

export default TaskDatosVehiculo;