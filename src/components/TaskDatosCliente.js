import {React,useContext} from 'react';

import {Button, TextField} from '@mui/material';

import { StepContext } from '../context/FormContext';

const TaskDatosCliente = () => {

    const {setStep,datosCliente,setDatosCliente} = useContext(StepContext);

    return (
        <div>
            <h2>Datos Cliente</h2>
            <div>
                <TextField label="Nombres" value={datosCliente['nombres']} onChange={(e)=>setDatosCliente({...datosCliente, 'nombres':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Apellidos" value={datosCliente['apellidos']} onChange={(e)=>setDatosCliente({...datosCliente, 'apellidos':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Email" value={datosCliente['email']} onChange={(e)=>setDatosCliente({...datosCliente, 'email':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Número Contacto" value={datosCliente['contacto']} onChange={(e)=>setDatosCliente({...datosCliente, 'contacto':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <TextField label="Cédula Identidad" value={datosCliente['cedula']} onChange={(e)=>setDatosCliente({...datosCliente, 'cedula':e.target.value})} margin="normal" variant="outlined" />
            </div>
            <div>
                <Button variant="contained" onClick={()=>{setStep(2)}}>Siguiente</Button>
            </div>
        </div>
    );
}

export default TaskDatosCliente;