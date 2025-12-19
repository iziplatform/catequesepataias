// .eleventy.js
// Ficheiro de configuração principal do Eleventy.
// Aqui definimos diretórios de entrada/saída, coleções de conteúdo
// e pastas que devem ser copiadas "as is" para o output.

module.exports = function(eleventyConfig) {
    // Copia a pasta "src/static" diretamente para "_site/static"
    // sem processamento pelo Eleventy (útil para imagens, CSS, JS, fontes, etc.).
    eleventyConfig.addPassthroughCopy("src/static");

    // Cria uma coleção chamada "recados".
    // Esta coleção lê todos os ficheiros Markdown em "src/recados/*.md"
    // e ordena por data (mais recentes primeiro).
    eleventyConfig.addCollection("recados", function(collectionApi) {
        return collectionApi
        // Seleciona os ficheiros de recados pelo padrão de caminho.
        .getFilteredByGlob("src/recados/*.md")
        // Ordena pela propriedade "date" do Eleventy (derivada do front matter).
        .sort(function(a, b) {
          return b.date - a.date; // b primeiro → ordem decrescente (mais recente em cima)
        });
    });

    //Cria uma coleção chamada "eventos"
    // Esta coleção lê todos os ficheiros Markdown em "src/eventos/*.md"
    // e ordena por data (mais recentes primeiro).
    eleventyConfig.addCollection("eventos", function(collectionApi) {
        return collectionApi
        // Seleciona os ficheiros de eventos pelo padrão de caminho.
        .getFilteredByGlob("src/eventos/*.md")
        // Ordena pela propriedade "date" do Eleventy (derivada do front matter).
        .sort(function(a, b) {
          return b.date - a.date; // b primeiro → ordem decrescente (mais recente em cima)
        });
    });

    // Define os diretórios base que o Eleventy deve usar.
    // input: onde está o código-fonte do site.
    // output: para onde o Eleventy gera o site estático final.
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
