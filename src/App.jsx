import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import Home from './pages/Home';
import Erro404 from './pages/404';
import CadastroCategoria from './pages/Cadastro/Categoria';
import CadastroVideo from './pages/Cadastro/Video';
import Header from './components/Header';
import LogoTdahflix from './components/LogoTdahflix';
import ButtonTdah from './components/ButtonTdah';

import FooterTdah from './components/Footer';
import LinkTdah from './components/LinkTdah';
import LogoImersao from './components/LogoImersao';

export default function App() {
  return (
      <BrowserRouter>
        <Header>
          <Link to="/">
            <LogoTdahflix />
          </Link>
          <Link to="/cadastro/video/">
            <ButtonTdah>Novo Vídeo</ButtonTdah>
          </Link>
        </Header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cadastro/video" exact>
            <CadastroVideo />
          </Route>
          <Route path="/cadastro/categoria" exact>
            <CadastroCategoria />
          </Route>
          <Route path="/">
            <Erro404 />
          </Route>
        </Switch>
        <FooterTdah>
          <p style={{'font-size': '12rem'}}>
            Desenvolvido durante a
            <a href="https://www.alura.com.br/imersao-react" target="_blank" rel="noreferrer" aria-label="Logo"><LogoImersao /></a>
            por
            <LinkTdah href="https://github.com/PauloHdaSLopes" target="_blank" rel="noreferrer">
              Paulo Lopes
            </LinkTdah>
          </p>
        </FooterTdah>
        </BrowserRouter>
  );
}
