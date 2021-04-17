const artigoDAO = require("../models/artigoDAO");

module.exports.get_artigos = function (application, req, res) {

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);

    artigoDao.getArtigos((err, result) => {
        if (err) throw err;

        res.json(result);
    });

}

module.exports.get_artigoId = function (application, req, res) {
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

module.exports.get_artigonome = function (application, req, res) {
    let nomeMeste = req.params.mestre;

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);

    artigoDao.getArtigoNome(nomeMeste, (erro, result) => {

        if (erro) {
            res.json(erro);
        } else {
            res.json(result);
        }
    });
}

module.exports.post_artigo = function (application, req, res) {
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

module.exports.put_artigo = function (application, req, res) {
    let artigo = req.body;
    let id = req.params.id;

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);

    artigoDao.putArtigo(id, artigo, (erro, result) => {
        if (erro) {
            res.json(erro.sqlMessage)
        } else {
            res.json(result.affectedRows);
        }
    });
}

module.exports.del_artigo = function (application, req, res) {
    let id = req.params.id;

    let cnn = application.config.dbConection();
    let artigoDao = new application.api.models.ArtigoDAO(cnn);

    artigoDao.delArtigo(id, (erro, result) => {
        if (erro) {
            res.json(erro)
        } else {
            res.json(result.affectedRows);
        }
    })
}
