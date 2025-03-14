import { useState } from 'react';
import { Cabecera } from './components/Cabecera';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cabecera />
      <h1>HOLA DESDE COMPONENTE APP</h1>
      <Footer />
    </>
  );
}

export default App;
