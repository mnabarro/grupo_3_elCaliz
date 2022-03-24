const { request, response } = require("express");
const db = require('../../database/models');

const categoriesAPI = {

    list: (req, res) => {
        db.Category.findAll()
            .then(categories => {
                res.status(200).json(
                    {   
                        total : categories.length,
                        data: {
                            categories
                        }
                    }
                )
            });
    },

    detail: (req, res) => {
        db.Category.findByPk(req.params.id)
        .then(found =>{
            res.status(200).json(
                {   
                    data: found
                }
            )                
        });
    }
}

module.exports = categoriesAPI;