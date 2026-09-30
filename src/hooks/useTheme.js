/**
 * =====================================================
 * useTheme
 * -----------------------------------------------------
 * Hook responsável por facilitar o acesso
 * ao contexto global de tema da aplicação.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

export function useTheme() {

    return useContext(ThemeContext);
    
}