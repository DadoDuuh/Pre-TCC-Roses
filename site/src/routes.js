import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Scheduled from './pages/consultas marcadas/marcadas';
import Archived from './pages/consultasArquivadas/arquivadas';
import Mark from './pages/marcarConsulta/marcar';
import Notes from './pages/anotações/Notes';


export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/arquivadas' element={<Archived />} />
                <Route path='/marcadas' element={<Scheduled />} />
                <Route path='/marcar' element={<Mark />} />
                <Route path='/anotacoes' element={<Notes />} />
            </Routes>
        </BrowserRouter>
    )
}