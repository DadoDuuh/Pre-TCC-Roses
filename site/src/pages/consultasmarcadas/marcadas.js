import "./marcadas.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Storage from 'local-storage'
import { useEffect, useState } from "react";
import { FiltrarPorCPF, ConsultarTodos, removerConsulta} from '../../api/consultaApi'

export default function Scheduled() {

    const [filtro, setFiltro] = useState('');
    const [consultas, setConsultas] = useState([]);

    async function filtrar() {
      const resp = await FiltrarPorCPF(filtro);
      setConsultas(resp);
    }
    async function carregarTodasConsultas() {
      const resp = await ConsultarTodos();
      
      setConsultas(resp);
    }

    useEffect(() => {
      carregarTodasConsultas();
    }, [])


     

  const navigate = useNavigate();


    useEffect(() => {
      if (!Storage('usuario-logado')) {
          navigate('/');  
      }
    
    }, [])

    function  sairClick () {
        Storage.remove('usuario-logado');
        navigate('/login');
    }
  return (
    <main className="page-scheduled">

      <section className="mae">
        <header className="menu">
          <Link to="/">
          <img
            className="logos"
            src="/images/logo-hori.jpg"
            alt=""
          />
        
          </Link>
          <Link className="buttons" to="/arquivadas">
            Arquivadas
          </Link>

          <Link className="buttons" to="/marcar">
            Marcar Consulta
          </Link>

          <button onClick={sairClick} className="buttons" to="/">
            <img src="/images/logout.png" style={{ width: "1.2em" }}
            /> &nbsp; Sair
          </button>
        </header>

        <div className="info">
          <div className="pesquisa">
            <div className="pesquisa-elements">
              <input type="text" placeholder="Pesquisar consulta (CPF)"  value = {filtro} onChange={e => setFiltro(e.target.value)}/>
              <img className="lupa" src = '/images/icone-loupe-gris.png' type="submit"  onClick={filtrar}/>
            </div>
          </div>
          <div className="arquivadas">
            <h2>Consultas Marcadas</h2>

            {consultas.map(item => 
              <div className="azulzin">
              <div>
                <p>{item.nome}</p>
                <p>CPF : {item.cpf}</p>
              </div>
              <div>
                <p>Data: {item.data}</p>
                <p>Horário : {item.horario}</p>
              </div>
              <div className="icons">
                
                  
                  <img src="/images/edit.png"
                    alt="" />
                
                
                  
                  <img src="/images/trash.png"
                    alt="" onClick={() => removerConsulta(item.nome)} />
                
              </div>
            </div>
            )}
            
          
          </div>
        </div>
        <footer className="rodape">
          <img
            className="logos"
            src="/images/logo-hori.jpg"
            alt=""
          />
          <p>
            “Viva cada dia o seu mal e cada dia como se fosse o último,
            aproveite cada sorriso, cada momento pois eles passam e só nos resta
            lembranças.”
          </p>
        </footer>
      </section>
    </main>
  );
}
