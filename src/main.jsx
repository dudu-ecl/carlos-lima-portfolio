/**
 * =====================================================
 * MAIN
 * -----------------------------------------------------
 * Ponto de entrada da aplicação React.
 *
 * Responsável por renderizar o App no elemento root,
 * aplicar os Providers globais e carregar os estilos
 * compartilhados por toda a aplicação.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import AppProviders from "./context/AppProviders";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>
);
