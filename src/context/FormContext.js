import { createContext, useState } from "react";
import App from '../App';

export const StepContext = createContext();


const tiempo_servicios = {"Cambio de Aceite":20,"Cambio de Frenos":45,"Alineación y Balanceo":45,
"Diagnóstico General":60,"Revisión Sistema Eléctrico":20,"Revisión de la Suspensión":25,"Cambio Batería":15,
"Cambio Ruedas":30}


const FormContext = () => {

    const [currentStep, setStep] = useState(1);
    const [datosCliente, setDatosCliente] = useState([]);
    const [datosVehiculo, setDatosVehiculo] = useState([]);
    const [servicios, setServicios] = useState([]);

    return(
        <div>
            <StepContext.Provider value={{currentStep,setStep,datosCliente,setDatosCliente,datosVehiculo,setDatosVehiculo,servicios,setServicios,tiempo_servicios}}>
                <App/>
            </StepContext.Provider>
        </div>
    );
}

export default FormContext;