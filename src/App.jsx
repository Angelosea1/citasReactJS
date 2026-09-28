import { useState } from 'react';
import Formulario from './components/Formulario';
import './css/main.css';

function App() {
  // modalVisible - false al dar click sea true
  const [modalVisible, setModalVisible] = useState(false);

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

      {modalVisible && (
        <div className='modal-overlay' role='dialog' aria-modal="true">
          <div className='modal-content'>
            <Formulario 
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </div>
        </div>
      )}

    </main>
  )
}

export default App