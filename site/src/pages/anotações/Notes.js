import "./Notes.scss";
import { Link } from "react-router-dom";


export default function Notes() {
  return (
    <main className="page-notes">
      <header className="menu">
        <Link to = "/">
        <img className="logos"src="/images/logo-hori.jpg"
        alt="logo"/>
        </Link>
        <Link className="a" to="/arquivadas">Voltar</Link>
      </header>

      <div className="info">
        <div className="branquin">
          <div className="text">
            <p>CAMILA NOVAES DOS SANTOS</p>
            <p>Data de nascimento: 20/03/2001</p>
          </div>
          <div className="text">
            <p>CPF:544.798.758-52</p>
            <p>Data: 27/03/2022</p>
          </div>
        </div>

        <div className="anotacoes">
          <h1 style={{color: "#2F5457; margin: 0px;"}}>Anotações</h1>

          <textarea name="" id="" cols="30" rows="13"></textarea>
        </div>

        <div className="button">
          <button className="a" to= "/arquivadas" >
            Concluir
          </button>
        </div>
      </div>

      <footer className="rodape">
        <img
            className="logos"
           src="images/logo-hori.jpg"
          alt="logo"
        />
        <p style={{width: "42em; text-align: center;"}}>
          “Viva cada dia o seu mal e cada dia como se fosse o último, aproveite
          cada sorriso, cada momento pois eles passam e só nos resta
          lembranças.”
        </p>
      </footer>
    </main>
  );
}
