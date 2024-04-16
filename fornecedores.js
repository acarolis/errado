document.addEventListener("DOMContentLoaded", function() {
    const fornecedoresTable = document.getElementById("fornecedores-table");
    const fornecedoresBody = document.getElementById("fornecedores-body");
    const adicionarFornecedorBtn = document.getElementById("adicionar-fornecedor-btn");

    adicionarFornecedorBtn.addEventListener("click", function() {
        const novoFornecedor = {
            nome: prompt("Digite o nome do fornecedor:"),
            telefone: prompt("Digite o telefone do fornecedor:"),
            cpfCnpj: prompt("Digite o CPF/CNPJ do fornecedor:"),
            email: prompt("Digite o email do fornecedor:")
        };

        if (novoFornecedor.nome && novoFornecedor.telefone && novoFornecedor.cpfCnpj && novoFornecedor.email) {
            adicionarFornecedorNaTabela(novoFornecedor);
        } else {
            alert("Por favor, preencha todas as informações do fornecedor.");
        }
    });

    function adicionarFornecedorNaTabela(fornecedor) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${fornecedor.nome}</td>
            <td>${fornecedor.telefone}</td>
            <td>${fornecedor.cpfCnpj}</td>
            <td>${fornecedor.email}</td>
        `;
        fornecedoresBody.appendChild(newRow);
    }
});
