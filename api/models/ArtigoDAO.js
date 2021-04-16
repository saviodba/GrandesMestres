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

    this._connection.query("select * from Mestres where id_mestre = " + id, callback);

}

ArtigoDAO.prototype.postArtigo = function (artigo, callback) {
    this._connection.query("insert into Mestres set ?", artigo, callback);
}

module.exports = function () {
    return ArtigoDAO;
}
