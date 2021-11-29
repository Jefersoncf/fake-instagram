module.exports = (req, res, next) =>{
    const {user} = req.session;

    if(typeof user == 'undefined' && !user){
        return res.redirect('/login');
    }

    res.locals.user = user;
    
    next();
}