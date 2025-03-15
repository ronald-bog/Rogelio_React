import './styles.scss';
import { useState } from 'react';
import { Cabecera } from './components/Cabecera';
import { Footer } from './components/Footer';
import { Contenido } from './components/Contenido'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cabecera />
      <Contenido />
      <Footer />
    </>
  );
}

export default App;
