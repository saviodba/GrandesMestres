module.exports.artigos = function (application, req, res) {

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);

    artigoDao.getArtigos((err, result) => {
        if (err) throw err;

        res.json(result);
    });

}

module.exports.artigoId = function (application, req, res) {
    let id = req.params.id;

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);

    artigoDao.getArtigoId(id, (erro, result) => {
        if (erro) {
            res.json(erro.sqlMessage)
        } else {
            res.json(result)
        }
    });


}

module.exports.novo_artigo = function (application, req, res) {
    let artigo = req.body;

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);


    artigoDao.postArtigo(artigo, (erro, result) => {
        if (erro) {
            res.json(erro.sqlMessage)
        } else {
            res.json(result.affectedRows)
        }
    });
}
