import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Login from "./pages/Login";
import Today from "./pages/Today";
import UsuarioContext from "./providers/usuarioContext";

function App() {
  const [token, setToken] = useState("")

console.log(token)

  return (
    <>
      <UsuarioContext.Provider value={{token , setToken}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos  />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<Historico />} />
          
          </Routes>
        </BrowserRouter>
      </UsuarioContext.Provider>
    </>
  )
}

export default App;
