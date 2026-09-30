/**
 * =====================================================
 * LanguageProvider
 * -----------------------------------------------------
 * Responsável por controlar o idioma global
 * da aplicação e disponibilizar os textos
 * correspondentes ao idioma selecionado.
 *
 * Também sincroniza informações do documento:
 *
 * - atributo lang do HTML;
 * - title da página;
 * - meta description.
 *
 * Idiomas disponíveis:
 * - pt-BR
 * - en
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import { useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext.js";
import { translations } from "../data/translations.js";

export function LanguageProvider({ children }) {

    /*
        Recupera o idioma salvo no navegador.

        Caso ainda não exista uma preferência salva,
        Português-BR será utilizado como padrão.
    */
    const [language, setLanguage] = useState(() => {

        return localStorage.getItem("language") || "pt-BR";

    });

    /*
        Seleciona os textos correspondentes
        ao idioma atualmente ativo.
    */
    const texts = translations[language];

     /*
        Mantém informações do documento
        sincronizadas com o idioma selecionado.
    */
    useEffect(() => {

        document.documentElement.lang = language;

        document.title = texts.seo.title;

        const descriptionMeta =
            document.querySelector('meta[name="description"]');

        if (descriptionMeta) {
                
            descriptionMeta.setAttribute(
                "content",
                texts.seo.description
            );
        }

    }, [language, texts]);

     /*
        Alterna entre Português-BR e Inglês
        e salva a preferência no navegador.
    */
    function toggleLanguage() {

        setLanguage((currentLanguage) => {

            const newLanguage = 
                currentLanguage === "pt-BR"
                    ? "en"
                    : "pt-BR";

            localStorage.setItem("language", newLanguage);

            return newLanguage;

        });
        
    }

    return (

        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
                texts
            }}
        >

            {children}

        </LanguageContext.Provider>

    );

}