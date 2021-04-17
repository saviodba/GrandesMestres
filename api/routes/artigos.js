module.exports = function (application) {

    application.get("/", (req, res) => {
        application.api.controllers.artigos.get_artigos(application, req, res);
    });

    application.get("/:id", (req, res) => {
        application.api.controllers.artigos.get_artigoId(application, req, res);
    });

    application.get("/Artigo/:mestre", (req, res) => {
        application.api.controllers.artigos.get_artigonome(application, req, res);
    })

    application.post("/", (req, res) => {
        application.api.controllers.artigos.post_artigo(application, req, res);
    });

    application.put("/:id", (req, res) => {
        application.api.controllers.artigos.put_artigo(application, req, res);
    })

    application.delete("/:id", (req, res) => {
        application.api.controllers.artigos.del_artigo(application, req, res);
    })

}
