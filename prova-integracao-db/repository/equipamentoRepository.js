import conexao from "../config/conexao";

export async function criarEquipamento(equipamento) {
    const sql = "insert into equipamentos (codigoPatrimonio, nome, setor, status) values (?, ?, ?, ?)"
    const [resultado] = await conexao.execute (sql, [
        equipamento.codigoPatrimonio,
        equipamento.nome,
        equipamento.setor,
        equipamento.status
    ]);

    return resultado.insertId;
}

export async function listarEquipamentos() {
    const sql = "select * from equipamentos order by id_equipamento"
    const [linhas] = await conexao.execute (sql);

    return linhas;
}

export async function buscarEquipamentoPorId(id) {
    const sql = "select * from equipamentos where id = ?"
    const [linhas] = await conexao.execute (sql, [id])

    return linhas[0];
}

export async function atualizarEquipamento(id, equipamento) {
    const sql = "update equipamentos set ( codigoPatrimonio= ?, nome = ?, setor = ?, status = ?) where id = ?"
    const [resultado] = await conexao.execute (sql, [
        equipamento.codigoPatrimonio,
        equipamento.nome,
        equipamento.setor,
        equipamento.status,
        id
    ]);
    return resultado.affectedrows; 
}

export async function excluirEquipamento(id) {
    const sql = "delete from equipamentos where id = ?"
    const [resultado] = await conexao.execute (sql, [id])

    return resultado.affectedrows;
}
