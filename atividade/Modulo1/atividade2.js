const TAXA_SERVICO = 0.05

try{
    TAXA_SERVICO = 0.1
} catch (error) {
    console.error("Erro ao tentar alterar a taxa de serviço:", error.message);
}