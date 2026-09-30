/*
=====================================================
COMPONENTE: ThemeToggle

Responsabilidade:

Permitir que o usuário alterne entre os temas
Light e Dark da aplicação.

O componente utiliza o hook useTheme para:

1. Identificar o tema atual;
2. Executar a alternância entre os temas;
3. Exibir o ícone correspondente à ação disponível.

O texto acessível do botão acompanha o idioma
atualmente selecionado na aplicação.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import styles from "./ThemeToggle.module.css";
import { useTheme } from "../../hooks/useTheme";
import { useLanguage } from "../../hooks/useLanguage";

function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();
  const { texts } = useLanguage();

  return (

    <button

        className={styles.button}
        onClick={toggleTheme}
        aria-label={
          theme === "dark"
          ? texts.themeToggle.light
          : texts.themeToggle.dark
        }

    >

      {theme === "dark" ? (
        
        /* Ícone de sol */
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >

          <circle
            cx="12"
            cy="12"
            r="4"
          />

          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.42 1.42" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path  d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />

        </svg>
        
      ) : (

        /* Ícone de lua */
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >

          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />

        </svg>

      )}

    </button>

  );

}

export default ThemeToggle;