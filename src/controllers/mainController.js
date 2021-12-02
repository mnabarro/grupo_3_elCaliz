const mainController = {

    index: (req, res) => {
        res.render( 'index', {path: '/'});
    },

    regret: (req, res) => {res.send( 'Arrepentimiento');},
    faq: (req, res) => {res.send( 'Preguntas frecuentes');},
    siteMap: (req, res) => {res.send( 'Mapa del sitio');},
    suscribe: (req, res) => {res.send( 'Suscribir al newsletter');},
    terms: (req, res) => {res.send( 'Términos y condiciones');},
};

module.exports = mainController;