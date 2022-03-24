const { request, response } = require("express");
const db = require('../../database/models');

const productsAPI = {

    list: (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.status(200).json(
                    {   
                        total : products.length,
                        data: {
                            products
                        }
                    }
                )
            });
    },

    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(found =>{
            res.status(200).json(
                {   
                    data: found
                }
            )                
        });
    },
}
module.exports = productsAPI;