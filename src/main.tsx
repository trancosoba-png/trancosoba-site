import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

const rootEl = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Páginas pré-renderizadas no build (SSG) trazem data-ssg no #root com o HTML
// completo da rota: hidratamos em vez de remontar. Nas demais (dev, fallback
// do servidor), comportamento anterior: montagem do zero.
if (rootEl.hasAttribute('data-ssg')) {
  hydrateRoot(rootEl, app)
  // Libera as animações de entrada (.reveal) depois que a hidratação assentou:
  // enquanto html.ssg existir, o CSS mantém os blocos .reveal visíveis para o
  // HTML pré-renderizado nunca aparecer escondido antes do JS carregar.
  requestAnimationFrame(() =>
    requestAnimationFrame(() => document.documentElement.classList.remove('ssg')),
  )
} else {
  createRoot(rootEl).render(app)
}
