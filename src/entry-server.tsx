// Entrada do pré-render SSG (build time). Renderiza cada rota com
// renderToString usando componentes síncronos (lazy/Suspense não resolve
// no servidor). É empacotada pelo esbuild em scripts/prerender-ssg.mjs —
// nunca vai para o bundle do navegador.
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App, { type Pages } from './App';
import Home from './pages/Home';
import Casas from './pages/Casas';
import Imovel from './pages/Imovel';
import Trancoso from './pages/Trancoso';
import Servicos from './pages/Servicos';
import Nos from './pages/Nos';
import Contato from './pages/Contato';
import Privacidade from './pages/Privacidade';
import Favoritos from './pages/Favoritos';
import Anuncie from './pages/Anuncie';
import Faq from './pages/Faq';
import Reveillon from './pages/Reveillon';
import Carnaval from './pages/Carnaval';
import NotFound from './pages/NotFound';

const pages: Pages = {
  Home, Casas, Imovel, Trancoso, Servicos, Nos, Contato, Privacidade,
  Favoritos, Anuncie, Faq, Reveillon, Carnaval, NotFound,
};

// A página de imóvel carrega a ficha via fetch no navegador; no SSG a ficha
// é injetada via globalThis para o HTML já sair completo (o mesmo global é
// gravado por <script> no HTML final — ver prerender-ssg.mjs e Imovel.tsx).
export function renderRoute(url: string, imovelData?: unknown): string {
  const g = globalThis as Record<string, unknown>;
  if (imovelData !== undefined) g.__IMOVEL_DATA__ = imovelData;
  try {
    return renderToString(
      <StaticRouter location={url}>
        <App pages={pages} />
      </StaticRouter>,
    );
  } finally {
    delete g.__IMOVEL_DATA__;
  }
}
