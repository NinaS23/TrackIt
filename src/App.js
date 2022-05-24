import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Login from "./pages/Login";
import Today from "./pages/Today";
import UsuarioContext from "./providers/usuarioContext";

function App() {
  const [token, setToken] = useState("")
  const [user, setUser] = useState(Usuario)
  function Usuario() {
    if (localStorage.getItem('userInfo')) {
      const object = JSON.parse(localStorage.getItem('object'));
      return object;
    }
    return {};
  }
  return (
    <>
      <UsuarioContext.Provider value={{user , setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login token={token} setToken={setToken}/>} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habitos />} />
          </Routes>
        </BrowserRouter>
      </UsuarioContext.Provider>
    </>
  )
}

export default App;
