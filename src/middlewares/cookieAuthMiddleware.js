function cookieAuthMiddleware (req, res, next) {
    next();
    if (req.cookies.recordar != undefined && req.session.userLogged == undefined ) {
        db.User.findOne({
            where: {
                mail: req.body.email
            }
        }).then(usr => {
                if (usr.email == req.cookies.recordar) {
                        req.session.userLogged = usr;
                        console.log(usr);
                        return res.redirect('/users/profile');
                } 
            }).catch((error) => {
            if (error) throw error;
        });
    }
}
  
module.exports = cookieAuthMiddleware