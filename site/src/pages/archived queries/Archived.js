import "./Archived.scss";
import { Link } from "react-router-dom";

export default function Archived() {
  return (
    <main className="page-archived">
      <div className="mae">
        <header className="menu">
          <img
            className="logos"
            src="/images/logo-hori.jpg"
            alt=""
          />

          <Link className="buttons" to="/marcadas">
            Marcadas
          </Link>

          <Link className="buttons" to="/marcar">
            Marcar Consulta
          </Link>

          <Link className="buttons" to="/">
            Página Inicial
          </Link>
        </header>

        <div className="info">
          <div className="pesquisa">
            <div className="pesquisa-elements">
              <input type="text" placeholder="Pesquisar consulta (CPF)" />
            </div>
          </div>
          <div className="arquivadas">
            <h2>Consultas Arquivadas</h2>

              <a className="azulzin">
                <div>
                  <p>CAMILA NOVAES DOS SANTOS</p>
                  <p>CPF: 544.798.758-52</p>
                </div>
                <div>
                  <p>Data: 27/03/2022</p>
                  <p>Horário:10:00h</p>
                </div>
              </a>
              <a className="azulzin">
                <div>
                  <p>JOÃO PEDRO DE MATOS CARVALHO</p>
                  <p>CPF: 581.211.547-22</p>
                </div>
                <div>
                  <p>Data: 26/03/2022</p>
                  <p>Horário:15:00h</p>
                </div>
              </a>
              <a className="azulzin">
                <div>
                  <p>LUÍS ALMEIDA CAMPOS</p>
                  <p>CPF: 354.298.228-36</p>
                </div>
                <div>
                  <p>Data: 26/03/2022</p>
                  <p>Horário:13:00h</p>
                </div>
              </a>
              <a className="azulzin">
                <div>
                  <p>VICTOR SANTOS PEREIRA</p>
                  <p>CPF:683.331.650-11</p>
                </div>
                <div>
                  <p>Data: 26/03/2022</p>
                  <p>Horário: 10:00h</p>
                </div>
              </a>
              <a className="azulzin">
                <div>
                  <p>JULIANO PISTORI</p>
                  <p>CPF:331.651.898-21</p>
                </div>
                <div>
                  <p>Data: 25/03/2022</p>
                  <p>Horário:13:00h</p>
                </div>
              </a>
              <a className="azulzin">
                <div>
                  <p>PEDRO SANTANA DE OLIVEIRA</p>
                  <p>CPF: 577.898.736-16</p>
                </div>
                <div>
                  <p>Data: 25/03/2022</p>
                  <p>Horário: 08:00h</p>
                </div>
              </a>
              <a className="azulzin">
                <div>
                  <p>ANDERSON SIQUEIRA LOPES</p>
                  <p>CPF:251.777.254-30</p>
                </div>
                <div>
                  <p>Data: 24/03/2022</p>
                  <p>Horário: 15:00h</p>
                </div>
              </a>
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
      </div>
    </main>
  );
}
