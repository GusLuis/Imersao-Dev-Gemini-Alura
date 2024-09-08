function pesquisar() {
    // Obtém a seção  HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado. Você precisa digitar o nome de uma IA"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa a string que armazenará os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descrição = "";

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        titulo = dado.descrição.toLowerCase()
        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
                <a href=${dado.link}  target="_blank" rel="noopener noreferrer"><p>Saiba mais</p></a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "Nada foi encontrado. Você digitou uma palavra errada!"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}