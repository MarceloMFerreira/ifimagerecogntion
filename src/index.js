import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header'
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import ComputerVision from "./components/ComputerVision";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <div>
    <Header />
    <Banner
      videoTitle={"Reconhecimento de Imagens (Capas de Discos)"}
      url={"https://www.youtube.com/watch?v=HtUH9z_Oey8"}
      videoDescription={"A música é reconhecida por muitos pesquisadores como uma modalidade que desenvolve a mente humana, promove o equilíbrio, proporcionando um estado agradável de bem-estar, facilitando a concentração e o desenvolvimento do raciocínio, em especial em questões reflexivas voltadas para o pensamento. a capa de disco é tão importante quanto o próprio disco – ou, melhor dizendo, não é possível, em muitos casos, separar um do outro. É um elemento que trabalha em harmonia com diversos outros elementos que compõem as práticas do artista para além da música"}
    />
    <ComputerVision />
    <Footer />
  </div>
    
);
