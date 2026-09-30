/*
=====================================================
CONFIGURAÇÃO: Vite

Responsabilidade:

Configurar o ambiente de desenvolvimento
e o processo de build da aplicação.

O plugin React integra o Vite ao React,
permitindo o processamento dos componentes
e os recursos utilizados durante o desenvolvimento.

Projeto: Portfólio 2.0
Autor: Carlos Lima
=====================================================
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
