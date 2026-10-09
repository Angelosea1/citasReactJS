import { useState } from 'react';
import Formulario from './components/Formulario';
import './css/main.css';
import Paciente from './components/Paciente';
import './css/paciente.css';

function App() {
  // modalVisible - false al dar click sea true
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEditar, setPacienteEditar] = useState(null);
  // Para pasar estados de un componente padre a un hijo se usa props
  return (
    <main className="container">
      <h1 className='titulo'>
        Administrador de Citas <span className='titulo-bold'>Veterinario</span>
      </h1>
      <button
        className='btn-nueva-cita'
        onClick={() => { setModalVisible(true) }}
      >
        <span className='btn-texto-nueva-cita'>Nueva Cita</span>
      </button>

      {pacientes.map((paciente) => (
        <Paciente setModalVisible={setModalVisible} pacientes={pacientes} paciente={paciente} key={paciente.id} />
      ))}

      

      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal="true">
          <div className='modal-content'>
            <Formulario 
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              pacientes={pacientes}
              setPacientes={setPacientes}
            />
          </div>
        </div>
      )}

    </main>
  )
}

export default App