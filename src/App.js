import { useState } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Cadastro from "./Cadastro";

import Login from "./Login";
import Today from "./Today";

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
