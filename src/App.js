import './App.css';


import TaskDatosCliente from './components/TaskDatosCliente';
import TaskDatosVehiculo from './components/TaskDatosVehiculo';
import TaskSeleccionServicios from './components/TaskSeleccionServicios';
import TaskOrdenTrabajo from './components/TaskOrdenTrabajo';

import {Step, Stepper, StepLabel} from '@mui/material';

import { StepContext } from './context/FormContext';
import { useContext } from 'react';

function App() {

  const {currentStep} = useContext(StepContext);

  const showStep = (step) => {
    switch(step){
      case 1:
        return <TaskDatosCliente/>
      case 2:
        return <TaskDatosVehiculo/>
      case 3:
        return <TaskSeleccionServicios/>
      case 4:
        return <TaskOrdenTrabajo/>
      default:
        return
    }
  }

  return (
    <div className='App'>
        <div className='App-header'>
          <h1>CarShop</h1>
          <div className='center-stepper'>
            <Stepper activeStep={currentStep - 1} orientation='horizontal' style={{width:'45%'}}>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {showStep(currentStep)}
        </div>
    </div>
  );
}

export default App;
