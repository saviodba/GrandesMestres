module.exports = function (application) {

    application.get("/", (req, res) => {
        application.api.controllers.artigos.artigos(application, req, res);
    });

    application.get("/Artigo/:id", (req, res) => {
        application.api.controllers.artigos.artigoId(application, req, res);
    });

    application.post("/Novo", (req, res) => {
        application.api.controllers.artigos.novo_artigo(application, req, res);
    });

}
