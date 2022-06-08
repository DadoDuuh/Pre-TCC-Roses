import "./marcar.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';   
import 'react-toastify/dist/ReactToastify.css';
import Storage from 'local-storage'
import { useState } from "react";
import { NovaConsulta } from "../../api/consultaApi";

function Mark() {

  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [nascimento, setNascimento] = useState(0);
  const [preco, setPreco] = useState(0);
  const [data, setData] = useState(0);
  const [horario, setHorario] = useState(0);
  const [contato, setContato] = useState('');

    async function marcarClick() {
        try {
            const id = Storage('usuario-logado').id;
           const r = await  NovaConsulta( nome, nascimento, cpf, horario, data, preco, contato, id);

          toast('Nova consulta marcada com sucesso.');
        } catch (err) {
          toast(err.response.data.erro);
        }
  }

  return (
    <main className="page-mark">
      <ToastContainer />
      <div className="info">
        <Link className="a" to="/marcadas">Voltar</Link>
        <h1 style={{color: " font-size: 2.3em; font-family: 'Quicksand', sans-serif;"}}>
          MARCAR CONSULTA
        </h1>

        <div className="registro">
          <div className="nome-paciente">
            <label  for="">Nome do paciente</label>
            <input 
              type="text"
              placeholder="Ex: Urias Conceição da Silva"
              value={ nome } onChange={e => setNome(e.target.value)}
            />
          </div>
          <div className="formulario-1">
            <div className="paciente">
              <label for="">Data de nascimento</label>
              <input type="date" value={ nascimento } onChange={e => setNascimento(e.target.value)}
            /> 
            </div>
            <div className="paciente">
              <label for="">CPF do paciente</label>
              <input type="text"  value={ cpf } onChange={e => setCpf(e.target.value)}
            />
            </div>
          </div>
          <div className="formulario-2">
            <div className="paciente">
              <label for="">Horário</label>
              <input type="time" value={ horario } onChange={e => setHorario(e.target.value)}
            /> 
            </div>
            <div className="paciente">
              <label for="">Data de consulta</label>
              <input type="date" value={ data } onChange={e => setData(e.target.value)}
            />
            </div>
          </div>
          <div className="formulario-3">
            <div className="paciente">
              <label for="">Preço</label>
              <input type="number" value={ preco } onChange={e => setPreco(e.target.value)}
            />
            </div>
            <div className="paciente">
              <label for="">Contato</label>
              <input type="text"  value={ contato } onChange={e => setContato(e.target.value)}
            />
            </div>
          </div>
        </div>

        <button onClick={marcarClick}C className="a" to="/marcadas">Marcar</button>
      </div>
    </main>
  );
}

export default Mark;