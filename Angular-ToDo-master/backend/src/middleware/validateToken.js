const jwt = require('jsonwebtoken')



exports.validateToken = async function(req, res, next){
 const token = await req.headers.authorization;
 console.log(token)
 if(!token) return res.status(401).json('Acceso denegado');
 const payload = await jwt.verify(token, process.env.TOKEN_SECRET || "Tokenimage");
 req.userId = payload._id;
 next();

}