import { useState } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Today from "./pages/Today";

function App() {
  const [token , setToken] = useState("")
  return (
    <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login token={token} setToken={setToken} />} />
          <Route path="/cadastro" element={<Cadastro/>} />
          <Route path="/hoje" element={<Today/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
