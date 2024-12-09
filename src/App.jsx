import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import livrosJSON from './assets/livros.json'; // Importa o JSON com os livros
import Home from './pages/Home';
import Create from './pages/Create';
import View from './pages/View';
import Edit from './pages/Edit';

function App() {
  const [livros, setLivros] = useState(livrosJSON); // Usa o JSON como estado inicial

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home livros={livros} setLivros={setLivros} />} />
        <Route path="/create" element={<Create livros={livros} setLivros={setLivros} />} />
        <Route path="/view/:id" element={<View livros={livros} />} />
        <Route path="/edit/:id" element={<Edit livros={livros} setLivros={setLivros} />} />
      </Routes>
    </Router>
  );
}

export default App;