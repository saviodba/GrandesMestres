function ArtigoDAO(connection) {
    this._connection = connection;
}

ArtigoDAO.prototype.getArtigos = function (callback) {

    this._connection.connect((erro) => {

        if (erro) throw erro;
        this._connection.query("select * from Mestres", callback);

    });
}

ArtigoDAO.prototype.getArtigoId = function (id, callback) {

    this._connection.connect(e => {
        if (e) throw e;
        this._connection.query("select * from Mestres where id_mestre = " + id, callback);
    })

}

ArtigoDAO.prototype.getArtigoNome = function (nomeMestre, callback) {

    this._connection.connect((e) => {

        if (e) throw e;
        this._connection.query(`select * from Mestres where mestre like "%${nomeMestre}%"`, callback);
    });

}

ArtigoDAO.prototype.postArtigo = function (artigo, callback) {

    this._connection.connect(e => {
        if (e) throw e;
        this._connection.query("insert into Mestres set ? ", artigo, callback);
    })

}

ArtigoDAO.prototype.putArtigo = function (id, artigo, callback) {

    this._connection.query(`
    update Mestres set 
        mestre = "${artigo.mestre}" , 
        caminho_img = "${artigo.caminho_img}" , 
        artigo_mestre = "${artigo.artigo_mestre}" 
    where id_mestre = ${id} `, callback);
}

ArtigoDAO.prototype.delArtigo = function (id, callback) {
    this._connection.query(`delete from Mestres where id_mestre = ${id}`, callback);
}

module.exports = function () {
    return ArtigoDAO;
}
