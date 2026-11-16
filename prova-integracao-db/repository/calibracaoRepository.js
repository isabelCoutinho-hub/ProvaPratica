import conexao from "../config/conexao";

export async function criarCalibracao(calibracao) {
    const sql = "insert into calibracao (equipamentoId, dataCalibracao, resultado, responsavel) values (?, ?, ?, ?)"
    const [resultado] = await conexao.execute (sql, [
        calibracao.equipamentoId,
        calibracao.dataCalibracao,
        calibracao.resultado,
        calibracao.responsavel
    ]);

    return resultado.insertId;
}

export async function listarCalibracoes() {
    const sql = "select * from calibracoes order by id_calibracao"
    const [linhas] = await conexao.execute (sql);

    return linhas;
}

export async function listarCalibracoesDetalhadas() {
    const sql = "select * from calibracoes order by id_calibracao = ?"
    const [linhas] = await conexao.execute (sql, [id]);

    return linhas[0];
}

export async function buscarCalibracaoPorId(id) {
    const sql = "select * from calibracoes where id = ?"
    const [linhas] = await conexao.execute (sql, [id])

    return linhas[0];
}

export async function atualizarCalibracao(id, calibracao) {
    const sql = "update calibracoes set (equipamentoId = ?, dataCalibracao = ?, resultado = ?, responsavel = ?) where id = ?"
    const [resultado] = await conexao.execute (sql, [
        calibracao.equipamentoId,
        calibracao.dataCalibracao,
        calibracao.resultado,
        calibracao.responsavel,
        id
    ]);
    return resultado.affectedrows; 
}

export async function excluirCalibracao(id) {
    const sql = "delete from calibracoes where id = ?"
    const [resultado] = await conexao.execute (sql, [id])

    return resultado.affectedrows;
}
