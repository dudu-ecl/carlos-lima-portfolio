/**
 * =====================================================
 * ThemeContext
 * -----------------------------------------------------
 * Responsável por controlar o tema global da aplicação.
 *
 * Autor: Carlos Lima
 * Projeto: Portfólio 2.0
 * =====================================================
 */

import { useState } from "react";
import { ThemeContext } from "./ThemeContext.js";

/*
  Provider responsável por disponibilizar
  o tema para toda a aplicação.
*/
export function ThemeProvider({ children }) {

  /*
    Recupera o tema salvo no navegador.

    Caso não exista um tema salvo,
    utilizaremos "light" como padrão.
  */
  const [theme, setTheme] = useState(() =>{

    return localStorage.getItem("theme") || "light";

  });

  /*
    Alterna entre light mode e dark mode
      e salva a escolha no navegador.
  */
  function toggleTheme() {

    setTheme((currentTheme) => {

      const newTheme =
        currentTheme === "light"
            ? "dark"
            : "light";

      localStorage.setItem("theme", newTheme);
      
      return newTheme;

    });

  }

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}

