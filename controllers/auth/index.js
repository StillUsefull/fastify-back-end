function rootController( req, rep){
    rep.send({hello: 'world'});
    console.log(req.session.user)
}

module.exports = {rootController}