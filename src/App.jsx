import './styles.scss';
import { Routes, Route } from 'react-router-dom';
//import { useState } from 'react';
import { Cabecera } from './components/Cabecera';
import { Footer } from './components/Footer';
import { Contenido } from './components/Contenido';
import { Contenido2 } from './components/Contenido2';
import { Contenido3 } from './components/Contenido3';

export const App = () => {
  //const [count, setCount] = useState(0);

  return (
    <>
      <Cabecera />
      <Routes>
        <Route path="contenido1" element={<Contenido />} />
        <Route path="contenido2" element={<Contenido2 />} />
        <Route path="contenido3" element={<Contenido3 />} />
      </Routes>
      <Footer />
    </>
  );
};
