const { request, response } = require("express");
const db = require('../../database/models');

const usersAPI = {

    list: (req, res) => {
        db.User.findAll()
            .then(users => {
                res.status(200).json(
                    {   
                        total : users.length,
                        data: {
                            users
                        }
                    }
                )
            });
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(found =>{
            res.status(200).json(
                {   
                    data: found
                }
            )                
        });
    }
}

module.exports = usersAPI;