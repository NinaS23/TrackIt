import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Habitos from "./pages/Habitos";
import Historico from "./pages/Historico";
import Login from "./pages/Login";
import Today from "./pages/Today";
import ImageContext from "./providers/imageContext";
import PercentageContext from "./providers/percentageContext";
import UsuarioContext from "./providers/usuarioContext";

function App() {
  const [token, setToken] = useState("")
  const [img , setImg] = useState("")
  const [perc , setPerc] = useState(0)
  console.log(token)


  return (
    <>

      <UsuarioContext.Provider value={{ token, setToken }}>
        <PercentageContext.Provider value={{perc , setPerc}}>
        <ImageContext.Provider value={{ img, setImg }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/habitos" element={<Habitos />} />
              <Route path="/hoje" element={<Today />} />
              <Route path="/historico" element={<Historico />} />
            </Routes>
          </BrowserRouter>
        </ImageContext.Provider>
        </PercentageContext.Provider>
      </UsuarioContext.Provider>

   

    </>
  )
}

export default App;
