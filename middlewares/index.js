const fs = require('fs')

const logreqres = (filename) =>{
    return (req, res, next) =>{
        fs.appendFile(
            filename,`\n ${Date.now()}: ${req.method}: ${req.path}`,
            (err, data)=> {
                next();
            }
        )
    }
}

module.exports = logreqres;