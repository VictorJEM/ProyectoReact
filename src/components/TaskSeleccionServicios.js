import { Checkbox,FormControlLabel,Button } from '@mui/material';
import {React,useContext} from 'react';

import { StepContext } from '../context/FormContext';

const TaskSeleccionServicios = () => {

    const {setStep,servicios,setServicios} = useContext(StepContext);

    return (
        <div>
            <h2>Menú de Servicios</h2>
            <div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Cambio de Aceite" value="Cambio de Aceite" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 1":e.target.value});
                        }}} />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Cambio de Frenos" value="Cambio de Frenos" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 2":e.target.value});
                        }}}/>
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Alineación y Balanceo" value="Alineación y Balanceo" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 3":e.target.value});
                        }}} />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Diagnóstico General" value="Diagnóstico General" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 4":e.target.value});
                        }}} />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Revisión Sistema Eléctrico" value="Revisión Sistema Eléctrico" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 5":e.target.value});
                        }}} />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Revisión de la Suspensión" value="Revisión de la Suspensión" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 6":e.target.value});
                        }}} />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Cambio Batería" value="Cambio Batería" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 7":e.target.value});
                        }}} />
                </div>
                <div>
                    <FormControlLabel control={<Checkbox />} label="Cambio Ruedas" value="Cambio Ruedas" onChange={(e)=>{
                        if(e.target.checked){
                            setServicios({...servicios, "servicio 8":e.target.value});
                        }}} />
                </div> 
            </div>
            <div>
                <Button variant="contained" onClick={()=>{setStep(2)}} color="secondary" >Regresar</Button><span> </span>
                <Button variant="contained" onClick={()=>{setStep(4)}} >Siguiente</Button>
            </div>
        </div>
    );
}

export default TaskSeleccionServicios;