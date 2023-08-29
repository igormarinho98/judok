import React from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.png';
import Form from './components/Form/Form';
import TextoDescricao from './components/TextoDescricao/TextoDescricao';
import JudokaBelt from './components/JudokaBelt/JudokaBelt';

function App() {
  const judoProjects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1 de judô.',
      image: img1
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2 de judô.',
      image: img2
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sensei Ailton Judoca </h1>
        
      <h3>
        <a className="instagram-link" href="https://www.instagram.com/judoca.ailton/">Página do instagram</a>
      </h3>
      <h2>
        <a className="link-wpp" href='https://wa.me/5511932345062'>Saiba Mais no WhatsApp </a> 
      </h2>

      </header>
       <main className="App-main">
        <Carousel swipeable={true} swipeScrollTolerance={10}>
          <div className="project-card">
            <img src={img1} alt="Projeto 1" />
            <h2>Atuação Pedagógica</h2>
            <p>Sensei Ailton Leonardo</p>
          </div>

          <div className="project-card">
            <img src={img2} alt="Projeto 2" />
            <h2>Aulas Infantis</h2>
            <p>Mais de 20 anos de experiência com crianças a partir de 4 anos </p>
          </div>

          <div className="project-card">
            <img src={img2} alt="Projeto 3" />
            <h2>Aulas para Adolescentes</h2>
            <p>O Esporte como parte da formação dos valores do cidadão, principalmente nas fases de formação e desenvolvimento pessoal.</p>
          </div>
        </Carousel>
      </main>

      <div>
        <TextoDescricao
          title="Valores de Atleta"
          content="O judô é uma arte marcial bastante conhecida pela questão da disciplina e do respeito, aspectos bem trabalhados e cobrados de seus atletas, por isso, é muito procurado na infância."
        />
        <TextoDescricao
          title="O Judo como ferramenta na formação dos filhos"
          content="Quando os pais matriculam os filhos em algum esporte, procuram atividades que proporcionem horas agradáveis para os pequenos, mas que também gerem benefícios para eles."
        />

        <div>
          <Form className="form-css formulario" />
        </div>
      </div>

      <footer className="footer">Judok <a className="link-wpp" href='https://github.com/igormarinho98'>Feito por Igor </a> </footer>


    </div>
  );
}

export default App;
