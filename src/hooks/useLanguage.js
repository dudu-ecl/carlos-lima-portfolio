/**
 * =====================================================
 * useLanguage
 * -----------------------------------------------------
 * Hook responsável por facilitar o acesso
 * ao contexto global de idioma da aplicação.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext.js";

export function useLanguage() {
            
    return useContext(LanguageContext);
    
}