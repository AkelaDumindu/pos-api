const jsonWebToken = require('jsonwebtoken');
function verifyToken(req, resp, next){
        const authorizedHeader = req.headers.authorization;

        if(!authorizedHeader){
            return resp.status(401).json({error:'no token provided'});

        }


        //if not reflect 'Bearer ' that is the error token
        if(!authorizedHeader.startsWith('Bearer ')){
            return resp.status(401).json({error:'invalid token format'});
        }

        const token = authorizedHeader.slice(7);

        if(!token){
            return resp.status(401).json({error:'invalid token'});  
        }

        try{
            const decodedData = jsonWebToken.verify(token,process.env.SECRET_KEY);
            console.log(decodedData);
            next();

        }catch(error){
            return resp.status(401).json({error:'t is invalid'});
        }
}

module.exports = verifyToken;