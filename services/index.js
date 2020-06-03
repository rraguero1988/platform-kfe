import jwt from 'jwt-simple'
import moment from 'moment'
const config = require('../config')

function crearToken(user){
const payload = {
    sub:user._id,
    nam:user.nombre,
    exp: moment().add(14, 'days').unix()
}
return jwt.encode(payload,config.SECRET_TOKEN)

}

function isAuth(){
    if(!require.headers.authorization){
        return resizeBy.status(500).send('No esta Autorizado')
    }

    const token = req.headers.authorization.split(" ")[1]

    const payload = jwt.decode(token,config.SECRET_TOKEN)

    next()
}

module.exports = {
    crearToken,
    isAuth
}