/**
 * =====================================================
 * ThemeContext
 * -----------------------------------------------------
 * Responsável por criar o contexto global de tema.
 *
 * O contexto é utilizado pelo ThemeProvider e
 * acessado pelos componentes através do useTheme.
 *
 * Projeto: Portfólio 2.0
 * Autor: Carlos Lima
 * =====================================================
 */

import { createContext } from "react";

export const ThemeContext = createContext();