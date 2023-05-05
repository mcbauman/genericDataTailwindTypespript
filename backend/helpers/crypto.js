const bcrypt = require("bcrypt")

function hash(password){
    return bcrypt.hash(password,3)
}

function compare(password, hash){
    return bcrypt.compare(password, hash)
}

module.exports = {hash, compare}