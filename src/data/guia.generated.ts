// ARQUIVO GERADO por scripts/generate-guia.mjs (npm run prebuild).
// Não edite à mão — os artigos vivem em src/content/guia/*.md.
export interface GuiaArticleData {
  title: string; slug: string; description: string; category: string;
  image: string; publishedAt: string; updatedAt: string; featured: boolean;
  seoTitle: string; seoDescription: string; markdown: string;
}
export const GUIA_ARTICLES: GuiaArticleData[] = [
  { title: "[TESTE] Artigo de exemplo do Guia", slug: "exemplo-teste", description: "CONTEÚDO DE TESTE — artigo fictício criado apenas para validar a estrutura do Guia TrancosoBA. Será removido antes da publicação dos artigos reais.", category: "Praias", image: "", publishedAt: "2026-08-25", updatedAt: "2026-08-25", featured: false, seoTitle: "[TESTE] Artigo de exemplo | Guia TrancosoBA", seoDescription: "Artigo de teste da infraestrutura do Guia TrancosoBA. Não é conteúdo editorial real.", markdown: "# [TESTE] Artigo de exemplo do Guia\n\n> **Atenção:** este é um artigo fictício, criado apenas para testar a estrutura do Guia TrancosoBA. Nenhuma informação aqui é real ou revisada.\n\nEste parágrafo testa texto corrido com **negrito**, *itálico* e um [link interno para a página de casas](/casas), além de um [link externo para o Instagram](https://instagram.com/trancosoba).\n\n## Uma seção de segundo nível\n\nUma lista simples:\n\n- Primeiro item de teste\n- Segundo item de teste\n- Terceiro item de teste\n\nE uma lista numerada:\n\n1. Passo um\n2. Passo dois\n3. Passo três\n\n### Uma subseção de terceiro nível\n\nUma citação:\n\n> “Texto de citação para validar o estilo de blockquote do artigo.”\n\n## Uma tabela de teste\n\n| Coluna A | Coluna B | Coluna C |\n|----------|----------|----------|\n| valor 1  | valor 2  | valor 3  |\n| valor 4  | valor 5  | valor 6  |\n\n## Imagem (quando houver)\n\nO campo `image` nos metadados é opcional. Este artigo de teste não usa imagem de capa.\n\nParágrafo final de teste, encerrando o artigo fictício." },
];
