/*
=====================================================
COMPONENTE: LanguageToggle

Responsabilidade:

Permitir que o usuário alterne o idioma global
da aplicação entre Português-BR e Inglês.

O componente utiliza o hook useLanguage para:

1. Identificar o idioma atual;
2. Alternar entre os idiomas disponíveis;
3. Exibir o idioma disponível para troca.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import { useLanguage } from "../../hooks/useLanguage";
import styles from "./LanguageToggle.module.css";

function LanguageToggle() {

    const { language, toggleLanguage, texts } = useLanguage();

    return (

        <button

            className={styles.button}
            onClick={toggleLanguage}
            aria-label={
                language === "pt-BR"
                    ? texts.languageToggle.toEnglish
                    : texts.languageToggle.toPortuguese
            }

        >

            {language === "pt-BR" ? "EN" : "PT"}

        </button>

    );

}

export default LanguageToggle;