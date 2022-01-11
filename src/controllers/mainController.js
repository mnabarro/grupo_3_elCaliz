const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 


const mainController = {

    index: (req, res) => {
        let id = req.params.id
        const result = products.filter(product => product.id <= 4);
        res.render( 'index', {result, cssa: 'index.css', title:"El Cáliz - Home"});
    },

    regret: (req, res) => {res.send( 'Arrepentimiento');},
    faq: (req, res) => {res.send( 'Preguntas frecuentes');},
    siteMap: (req, res) => {res.send( 'Mapa del sitio');},
    suscribe: (req, res) => {res.send( 'Suscribir al newsletter');},
    terms: (req, res) => {res.send( 'Términos y condiciones');},
};

module.exports = mainController;