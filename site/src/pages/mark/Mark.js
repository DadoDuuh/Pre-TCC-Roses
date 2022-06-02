import "./Mark.scss";
import { Link } from "react-router-dom";

export default function Mark() {
  return (
    <main className="page-mark">
      <div className="info">
        <Link to="/marcadas">Voltar</Link>
        <h1 style="color: #40C0CB; font-size: 2.3em; font-family: rose-bold;">
          MARCAR CONSULTA
        </h1>

        <div className="registro">
          <div className="paciente">
            <label for="">Nome do paciente</label>
            <input
              style="width: 100%;"
              type="text"
              placeholder="Ex: Urias Conceição da Silva"
            />
          </div>
          <div className="formulario-1">
            <div className="paciente">
              <label for="">Data de nascimento</label>
              <input type="date" />
            </div>
            <div className="paciente">
              <label for="">CPF do paciente</label>
              <input type="text" />
            </div>
          </div>
          <div className="formulario-2">
            <div className="paciente">
              <label for="">Horário</label>
              <input type="time" />
            </div>
            <div className="paciente">
              <label for="">Data de consulta</label>
              <input type="date" />
            </div>
          </div>
          <div className="formulario-3">
            <div className="paciente">
              <label for="">Preço</label>
              <input type="number" />
            </div>
            <div className="paciente">
              <label for="">Contato</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <Link to="/marcadas">Marcar</Link>
      </div>
    </main>
  );
}
