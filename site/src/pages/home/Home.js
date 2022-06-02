import "./Home.scss";
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="page-home">
      <header>
        <img src="/images/logo-hori.jpg" />

        <Link className="buttons" to="/login">
          Área administrativa
        </Link>
      </header>
      <div className="Shadow"></div>

      <section className="content">
        <div className="content-container1" style={{backgroundImage: "url(/woman-ct1.jpg)"}}>
          <div className="container1-espacamento">
            <p className="espacamento-text">
              “Uma vida sem pensamento é possível, mas ela fracassa em fazer
              desabrochar sua própria essência – ela não é apenas sem sentido,
              ela não é totalmente viva” <br />
              <br /> (Hannah Arendt)
            </p>
          </div>
        </div>

        <div className="content-container2">
          <img src="/images/Psico-logo.jpg" alt="" />

          <p className="ct2-text">
            A psicanálise é uma das linhas de estudos da psicologia, ela
            acredita que nossos comportamentos e sentimentos são regidos pelo
            inconsciente. Seu principal objetivo é a interpretação de suas
            representações mentais, como sonhos, desejos, pensamentos e
            lembranças. Através da escuta atenta, o psicoterapeuta terá acesso
            aos campos conflitantes da mente do paciente, que devem ser
            transferidos para um plano de vista que seja facilmente penetrável
            pela pessoa.
          </p>
        </div>

        <div className="content-container3">
          <div className="boxes">
            <h2>
              O que é<br />
              Psicoterapia?
            </h2>
            <p>
              A psicoterapia, ou simplesmente terapia, veio a partir de
              conceitos da psicologia. Ela busca trabalhar a partir do diálogo e
              da conversa as questões emocionais, fazendo o uso de várias
              abordagens, conexões com o subconsciente e outras ferramentas.
            </p>
          </div>

          <div className="boxes">
            <h2>
              Para que serve a<br />
              Psicoterapia?
            </h2>
            <p>
              A psicoterapia serve para tratar questões emocionais, sejam elas
              de grande impacto ou até mesmo menores. Ou seja, você pode tratar
              desde a perda de alguém querido até um desconforto emocional no
              trabalho, ou uma briga com seu parceiro.
            </p>
          </div>

          <div className="boxes">
            <h2>
              Quando ir
              <br />
              ao psicólogo?
            </h2>
            <p>
              A procura pelo auxílio de um psicólogo pode se dar pelos mais
              diversos motivos que vão desde problemas emergenciais muito bem
              focalizados, orientações e esclarecimentos, dificuldades
              existenciais ou mesmo pela busca de autoconhecimento. Quanto mais
              cedo se procura ajuda, mais cedo se diagnostica e se trata o
              problema.
            </p>
          </div>
        </div>

        <div className="content-container4">
          <img className="ct4-psicologo" src="/images/zyro-image.png" alt=""/>

          <div className="container4-text">
            <h2>Sobre mim</h2>
            <p>
              Trabalho com a abordagem sistêmica, que me permite olhar para o
              indivíduo como fruto de suas relações onde está inserido, buscando
              compreender os sistemas, sejam eles familiares, entre amigos,
              relacionamentos amorosos ou empregatícios. <br />
              Estou aqui para juntos construirmos um vínculo onde será permitido
              que o sujeito compreenda e administre melhor os seus conflitos,
              sentimentos, emoções e comportamentos. <br />
              Esse caminho faz parte do meu trabalho enquanto profissional da
              psicologia, me proporcionando realização em poder acolher o
              sofrimento do outro e ir em busca de novas possibilidades e
              significados na sua vida.
            </p>
          </div>
        </div>

        <div className="content-container5">
          <h3>
            Depoimentos
          </h3>

          <h2>
            Opinião dos pacientes
          </h2>

          <div className="container5-texts">
            <div className="container5-text1">
              <div></div>

              <p>
                “Profissional competente, objetivo, dedicado, demonstrando
                sempre que gosta muito de sua profissão.” <br />
                <br /> (Priscila Vianna)
              </p>

              <div></div>

              <p>
                “Excelente Profissional, excelente pessoa, excelente espaço de
                atendimento, excelente localização, eu recomendo, com muita
                segurança.” <br />
                <br /> (Vitória Gonçalvez)
              </p>
            </div>

            <div className="container5-text1">
              <div></div>

              <p>
                “Experiência muito agradável, profissional dedicado e muito
                focado no trabalho, eu recomendo.” <br />
                <br /> (Juliano Pistori)
              </p>

              <div></div>

              <p>
                “Experiência única, super recomendo, profissional excelente
                super atencioso e o ambiente é aconchegante” <br />
                <br /> (Monique Pimenta)
              </p>
            </div>
          </div>
        </div>


      </section>
      <footer>
          <div className="footer">
            <div className="footer-container2">
              <img className="logos" src="/images/logo-hori.jpg" alt="" />
              <p>CRP: 02/22222</p>
            </div>

            <div className="footer-container3">
              <p>
                (11) 99999-9999 <br />
                <br />
                (11) 5555-5555
                <br />
                <br />
                @instagramdopsi <br />
                <br />
                email@marcarconsulta.com
              </p>
            </div>

            <div className="footer-container3">
              <p>
                Av. Leôncio de Magalhães, 1004, conj. 95, 9o andar - Jardim São
                Paulo - São Paulo -SP - 02042-001 <br />
                <br />
                (ao lado do metrô Jd. São Paulo) <br />
                <br />
                Zona Norte | proximidades: Tucuruvi, Parada Inglesa, Santana,
                Imirim, Casa Verde, Mandaqui.
              </p>
            </div>
          </div>
        </footer>
    </main>
  );
}

export default Home;
