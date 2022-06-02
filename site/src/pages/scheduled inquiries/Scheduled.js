import "./Scheduled.scss";
import { Link } from "react-router-dom";

export default function Scheduled() {
  return (
    <main className="page-scheduled">

      <section className="mae">
        <header className="menu">
          <img
            className="logos"
            src="/images/logo-hori.jpg"
            alt=""
          />

          <Link className="buttons" to="/arquivadas">
            Arquivadas
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
            <h2>Consultas Marcadas</h2>

            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>JULIANA DE CASSIA JUNQUEIRA</p>
                  <p>CPF: 798.155.281-72</p>
                </div>
                <div>
                  <p>Data: 04/03/2022</p>
                  <p>Horário:10:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>ANA BEATRIZ PEREIRA DOS REIS</p>
                  <p>CPF:154.365.774-29</p>
                </div>
                <div>
                  <p>Data: 04/03/2022</p>
                  <p>Horário:13:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>MARIA LUIZA SANTOS LIMA</p>
                  <p>CPF:211.368.741-01</p>
                </div>
                <div>
                  <p>Data: 04/03/2022</p>
                  <p>Horário:10:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>MARIA EDUARDA SAMPAIO SILVA</p>
                  <p>CPF:544.798.758-52</p>
                </div>
                <div>
                  <p>Data: 04/03/2022</p>
                  <p>Horário:10:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>VICTOR SANTOS PEREIRA</p>
                  <p>CPF:683.331.650-11</p>
                </div>
                <div>
                  <p>Data: 04/03/2022</p>
                  <p>Horário:11:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>JULIANO PISTORI</p>
                  <p>CPF:331.651.898-21</p>
                </div>
                <div>
                  <p>Data: 04/03/2022</p>
                  <p>Horário:13:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
            <Link to='/anotacoes'>
              <div className="azulzin">
                <div>
                  <p>LETICIA ROCHA BARBOSA</p>
                  <p>CPF:251.777.254-30</p>
                </div>
                <div>
                  <p>Data: 25/03/2022</p>
                  <p>Horário:08:00h</p>
                </div>
                <div className="icons">
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/edit.png" />
                  </Link>
                  <Link to='/marcar'>
                    {" "}
                    <img src="/images/trash.png" />
                  </Link>
                </div>
              </div>
            </Link>
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
