function rootController( req, rep){
    rep.send({hello: 'world'});
}

module.exports = {rootController}